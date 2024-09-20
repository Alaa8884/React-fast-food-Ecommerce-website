import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import Helmet from "../components/helmet/Helmet";
import CommonSection from "../components/Ui/common-section/CommonSection";
import "../styles/cart.css";
import TrTable from "../components/Ui/cart/TrTable";

function Cart() {
  const userCart = useSelector((state) => state.cart.cart);
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  const cartEmpty = userCart.length === 0;
  console.log(userCart);

  return (
    <Helmet title="You Cart">
      <CommonSection title="Your Cart" />
      <section>
        <Container>
          <Row>
            <Col lg="12" className=" text-center">
              {cartEmpty ? (
                <h3 className="cart-empty display-4 ">Your cart is empty</h3>
              ) : (
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th>Image</th>
                      <th>Food Title</th>
                      <th>Quantity</th>
                      <th>Price</th>
                      <th>Total Price</th>
                      <th>Delete</th>
                    </tr>
                  </thead>
                  <tbody>
                    {userCart.map((food) => (
                      <TrTable food={food} key={food.id} />
                    ))}
                  </tbody>
                </table>
              )}
            </Col>
            <div className="subtotal my-4 d-flex flex-column g-3">
              <h4 className="totalamount">
                Subtotal: <span>{totalAmount} </span>EGP
              </h4>
              <p>Taxes and shipping will calculate at checkout</p>
            </div>
            <div className="user-cart-btns d-flex align-items-center gap-3">
              {" "}
              <button>
                <Link to="/foods">Continue Shopping</Link>
              </button>
              {cartEmpty ? (
                ""
              ) : (
                <button>
                  <Link to="/checkout">Procced to checkout</Link>
                </button>
              )}
            </div>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
}

export default Cart;
