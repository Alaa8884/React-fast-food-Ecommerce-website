/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../../../store/shopping-cart/cartSlice";
import "../../../styles/productCard.css";

function ProductCard({ food }) {
  const dispatch = useDispatch();
  const { id, title, price, image01 } = food;
  
  function handleAddToCart() {
    const newItem = {
      id,
      title,
      price,
      image01,
      quantity:1,
    };
    dispatch(addItemToCart(newItem));
  }

  return (
    <div className="product-item h-100">
      <Link to={`/foods/${id}`} className="product-img">
        <img src={image01} alt={`${title}-image`} className=" w-50" />
      </Link>
      <div className="product-content w-100">
        <h5>
          <Link to={`/foods/${id}`}>{title}</Link>
        </h5>
      </div>
      <div className=" d-flex align-items-center justify-content-between gap-2">
        <span className="product-price">{price} EGP</span>
        <button className="addToCart" onClick={handleAddToCart}>
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
