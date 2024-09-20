import { ListGroup } from "reactstrap";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toggleCart } from "../../../store/shopping-cart/cartUiSlice";
import { clearCart } from "../../../store/shopping-cart/cartSlice";
import CartItem from "./CartItem";
import "../../../styles/shopping-cart.css";

function Carts() {
  const dispatch = useDispatch();
  const userCart = useSelector((state) => state.cart.cart);
  const totalAmount = useSelector((state) => state.cart.totalAmount);

  const isEmpty = userCart.length === 0;

  function handleCloseCart() {
    dispatch(toggleCart());
  }

  function handleDeleteAllCart() {
    dispatch(clearCart());
  }

  return (
    <>
      <div className="cart-box">
        <ListGroup className="cart-content d-flex justify-content-between ">
          <div className="cart-close-btn" onClick={handleCloseCart}>
            <i className="ri-close-circle-fill"></i>
          </div>
          <h2 className="text-center">Your Cart</h2>
          <div className="cart-item-list d-flex flex-column">
            {isEmpty ? (
              <h3 className=" text-center mt-5 display-6">
                Your cart is empty
              </h3>
            ) : (
              userCart.map((product) => (
                <CartItem key={product.id} product={product} />
              ))
            )}
            {isEmpty ? (
              ""
            ) : (
              <button
                className="delete-all-cart align-self-end"
                onClick={handleDeleteAllCart}
              >
                Delete all
              </button>
            )}
          </div>

          <div className="cart-footer d-flex align-items-center justify-content-between gap-2">
            <h6 className="total-amount-title">
              Total amount :{" "}
              <span className="total-amount">{totalAmount} EGP</span>
            </h6>
            <button className="cart-checkout-btn">
              <Link to="/checkout">Checkout</Link>
            </button>
          </div>
        </ListGroup>
      </div>
      <div className="cart-over-lay" onClick={handleCloseCart}></div>
    </>
  );
}

export default Carts;
