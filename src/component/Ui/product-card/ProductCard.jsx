/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import "../../../styles/productCard.css";

function ProductCard({ food }) {
  const { id, title, price, image01 } = food;
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
        <button className="addToCart">Add to Cart</button>
      </div>
    </div>
  );
}

export default ProductCard;
