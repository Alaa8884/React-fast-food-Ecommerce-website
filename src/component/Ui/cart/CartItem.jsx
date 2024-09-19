/* eslint-disable react/prop-types */
import { ListGroupItem } from "reactstrap";
import "../../../styles/cart-item.css";
import { useDispatch } from "react-redux";
import {
  // clearCart,
  decreaseItemQuantity,
  deleteItem,
  increaseItemQuantity,
} from "../../../store/shopping-cart/cartSlice";

function CartItem({ product }) {
  const dispatch = useDispatch();
  const { id, title, price, image01, quantity, totalPrice } = product;

  function handleIncreaseProduct() {
    dispatch(increaseItemQuantity(id));
  }

  function handleDecreaseProduct() {
    dispatch(decreaseItemQuantity(id));
  }
  function handleDeleteProduct() {
    dispatch(deleteItem(id));
  }
  return (
    <ListGroupItem className="cart-item border-0 ">
      <div className="cart-item-info d-flex gap-4 ">
        <img src={image01} alt="" className="cart-item-img" />
        <div className="cart-food-content w-100 d-flex align-items-center justify-content-between">
          <div>
            <h6 className="cart-food-title">{title}</h6>
            <p className="cart-food-price d-flex align-items-center gap-3">
              {quantity}x <span>{price} EGP</span>➡<span>{totalPrice} EGP</span>
            </p>
            <div className="cart-food-inc-dec-btns d-flex align-items-center justify-content-between">
              <span className="increase-btn" onClick={handleIncreaseProduct}>
                <i className="ri-add-line"></i>
              </span>
              <span className="quantity">{quantity}</span>
              <span className="decrease-btn" onClick={handleDecreaseProduct}>
                <i className="ri-subtract-line"></i>
              </span>
            </div>
          </div>
          <span className="delete-cart-btn" onClick={handleDeleteProduct}>
            <i className="ri-close-circle-fill"></i>
          </span>
        </div>
      </div>
    </ListGroupItem>
  );
}

export default CartItem;
