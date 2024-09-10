import { ListGroupItem } from "reactstrap";
import cartImage from "../../../assets/images/food_05.1.jpg";
import "../../../styles/cart-item.css"

function CartItem() {
  return (
    <ListGroupItem className="cart-item border-0 ">
      <div className="cart-item-info d-flex gap-4 ">
        <img src={cartImage} alt="" className="cart-item-img" />
        <div className="cart-food-content w-100 d-flex align-items-center justify-content-between">
          <div>
            <h6 className="cart-food-title">pizza</h6>
            <p className="cart-food-price d-flex align-items-center gap-5">
              1x <span>250 Egp</span>
            </p>
            <div className="cart-food-inc-dec-btns d-flex align-items-center justify-content-between">
              <span className="increase-btn">
                <i className="ri-add-line"></i>
              </span>
              <span className="quantity">1</span>
              <span className="decrease-btn">
                <i className="ri-subtract-line"></i>
              </span>
            </div>
          </div>
          <span className="delete-cart-btn">
            <i className="ri-close-circle-fill"></i>
          </span>
        </div>
      </div>
    </ListGroupItem>
  );
}

export default CartItem;
