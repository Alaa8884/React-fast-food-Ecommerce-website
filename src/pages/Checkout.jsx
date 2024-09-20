import { useSelector } from "react-redux";
import { Col, Container, Row } from "reactstrap";
import Helmet from "../components/helmet/Helmet";
import CommonSection from "../components/Ui/common-section/CommonSection";
import "../styles/checkout.css";
import { useState } from "react";

function Checkout() {
  const [enterdName, setEnteredName] = useState("");
  const [enterdEmail, setEnteredEmail] = useState("");
  const [enterdPhone, setEnteredPhone] = useState("");
  const [enterdCountry, setEnteredCountry] = useState("");
  const [enterdCity, setEnteredCity] = useState("");
  const [enterdPostalCode, setEnteredPostalCode] = useState("");

  const shippingInfo = [];

  const totalAmount = useSelector((state) => state.cart.totalAmount);
  const shippingAmount = 50;
  const orderTotal = Number(totalAmount) + Number(shippingAmount);

  function handleSubmit(e) {
    e.preventDefault();
    const userShippingInfo = {
      name: enterdName,
      email: enterdEmail,
      phoneNumber: enterdPhone,
      country: enterdCountry,
      city: enterdCity,
      postalCode: enterdPostalCode,
    };
    shippingInfo.push(userShippingInfo);
    console.log(shippingInfo);
  }
  return (
    <Helmet title="Checkout">
      <CommonSection title="Checkout" />
      <section>
        <Container>
          <Row>
            <Col lg="8" md="6" xs="12">
              <h3 className="mb-4">Shipping Address</h3>
              <form className="checkout-form " onSubmit={handleSubmit}>
                <div className="checkout-input">
                  <input
                    type="text"
                    name="user-name"
                    placeholder="Enter your name"
                    required
                    onChange={(e) => setEnteredName(e.target.value)}
                  />
                </div>
                <div className="checkout-input">
                  <input
                    type="email"
                    name="user-email"
                    placeholder="Enter your email"
                    required
                    onChange={(e) => setEnteredEmail(e.target.value)}
                  />
                </div>
                <div className="checkout-input">
                  <input
                    type="number"
                    name="user-phoneNumber"
                    placeholder="Enter your phone number"
                    required
                    onChange={(e) => setEnteredPhone(e.target.value)}
                  />
                </div>
                <div className="checkout-input">
                  <input
                    type="text"
                    name="user-country"
                    placeholder="Your country"
                    required
                    onChange={(e) => setEnteredCountry(e.target.value)}
                  />
                </div>

                <div className="checkout-input">
                  <input
                    type="text"
                    name="user-city"
                    placeholder="Your city"
                    required
                    onChange={(e) => setEnteredCity(e.target.value)}
                  />
                </div>
                <div className="checkout-input">
                  <input
                    type="number"
                    name="user-postalCode"
                    placeholder="Postal code"
                    required
                    onChange={(e) => setEnteredPostalCode(e.target.value)}
                  />
                </div>
                <button className="checkout-btn " type="submit">
                  Payment
                </button>
              </form>
            </Col>
            <Col lg="4" md="6" xs="12">
              <div className="checkout-amount-details">
                <div className="subtotal-amount mb-3">
                  <span>Subtotal:</span> <span>{totalAmount} EGP</span>
                </div>
                <div className="shipping-amount mb-3">
                  <span>Shipping:</span> <span>{shippingAmount} EGP</span>
                </div>
                <div className="checkout-total">
                  <span>Total:</span> <span>{orderTotal} EGP</span>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
}

export default Checkout;
