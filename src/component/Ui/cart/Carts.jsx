import { ListGroup } from "reactstrap";
import CartItem from "./CartItem";
import { Link } from "react-router-dom";
import "../../../styles/shopping-cart.css"

function Carts() {
  
  return (
    <>
      <div className="cart-box">
        <ListGroup className="cart-content d-flex justify-content-between">
          <div className="cart-close-btn">
            <i className="ri-close-circle-fill"></i>
          </div>
          <div className="cart-item-list">
            <CartItem />
            <CartItem />
            <CartItem />
            <CartItem />
            <CartItem />
            <CartItem />
            <CartItem />
            <CartItem />
            <CartItem />
          </div>
          <div className="cart-footer d-flex align-items-center justify-content-between">
            <h6 className="total-amount-title">
              Total amount : <span className="total-amount">350000 Egp</span>
            </h6>
            <button className="cart-checkout-btn">
              <Link to="/checkout">Checkout</Link>
            </button>
          </div>
        </ListGroup>
      </div>
      <div className="cart-over-lay"></div>
    </>
  );
}

export default Carts;
