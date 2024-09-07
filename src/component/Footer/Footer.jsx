import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import logo from "../../assets/images/res-logo.png";
import "../../styles/footer.css";
import { Link } from "react-router-dom";

function Footer() {
   const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="3" md="4" sm="6" >
            <div className="footer-logo text-start">
              <img src={logo} alt="resturant logo" />
              <h5>El Masrawy</h5>
              <p>
                Craving your favorite food? Look no further! Our fast and
                reliable food delivery service brings the best restaurants right
                to your doorstep.
              </p>
            </div>
          </Col>
          <Col lg="3" md="4" sm="6">
            <h5 className="footer-title">Delivery Time</h5>
            <ListGroup className="footer-list delivery-time-list">
              <ListGroupItem className="list-item delivery-time border-0 ps-0">
                <span>Monday - Friday</span>
                <p>09:00am - 11:30pm</p>
              </ListGroupItem>
              <ListGroupItem className="list-item delivery-time border-0 ps-0">
                <span>Saturday</span>
                <p>11:00am - 6:30pm</p>
              </ListGroupItem>
            </ListGroup>
          </Col>
          <Col lg="3" md="4" sm="6">
            <h5 className="footer-title">Contact</h5>
            <ListGroup className="footer-list delivery-contact-list">
              <ListGroupItem className="list-item delivery-contact border-0 ps-0">
                <i className="ri-map-pin-fill"></i>
                <p>Location: 215 Street, Maadi, Cairo, Egypt</p>
              </ListGroupItem>
              <ListGroupItem className="list-item delivery-contact border-0 ps-0">
                <i className="ri-phone-line"></i>{" "}
                <span>Phone: 01212345678</span>
              </ListGroupItem>
              <ListGroupItem className="list-item delivery-contact border-0 ps-0">
                <i className="ri-whatsapp-line"></i>
                <span>Whatsapp: 01212345698</span>
              </ListGroupItem>
              <ListGroupItem className="list-item delivery-contact border-0 ps-0">
                <i className="ri-mail-line"></i>
                <span>Email: elmasry@testweb.com</span>
              </ListGroupItem>
            </ListGroup>
          </Col>
          <Col lg="3" md="4" sm="6" className="newsletter">
            <h5 className="footer-title">Newsletter</h5>
            <p>Subscribe our newsletter</p>
            <form className="newsletter-input">
              <input
                type="email"
                name="newsletter"
                id="newsletter"
                placeholder="Enter your email"
              />
              <button type="submit">
                <i className="ri-send-plane-fill"></i>
              </button>
            </form>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col lg="6" md="6">
            <p className="copyright-info">
              Copyright &copy; {currentYear}, All Rights reserved
            </p>
          </Col>
          <Col lg="6" md="6">
            <div className="social-links d-flex align-items-center gap-4 justify-content-end">
              <p className="m-0">Follow:</p>
              <span>
                <Link to="https://facebook.com">
                  <i className="ri-facebook-fill"></i>
                </Link>
              </span>
              <span>
                <Link to="linkedin.com/in/alaa-mohammed-youssef-9b9268220">
                  <i className="ri-linkedin-fill"></i>
                </Link>
              </span>
              <span>
                <Link to="https://youtube.com">
                  <i className="ri-youtube-fill"></i>
                </Link>
              </span>
              <span>
                <Link to="https://github.com/Alaa8884">
                  <i className="ri-github-fill"></i>
                </Link>
              </span>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
