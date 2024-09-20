import { Col, Container, ListGroup, ListGroupItem, Row } from "reactstrap";
import Helmet from "../components/helmet/Helmet";
import CommonSection from "../components/Ui/common-section/CommonSection";
import "../styles/contact.css";

function Contact() {
  return (
    <Helmet title="Contact">
      <CommonSection title="Contact us" />
      <section className="contact-section">
        <Container>
          <Row>
            <Col lg="12" className=" d-flex flex-column align-items-center">
              <h5 className="contact-title display-5 mb-3">Contact Us</h5>
              <ListGroup className="contact-list">
                <ListGroupItem className="list-item delivery-contact border-0 ps-0">
                  <i className="ri-map-pin-fill"></i>
                  <p className="contact-info">
                    Location: 215 Street, Maadi, Cairo, Egypt
                  </p>
                </ListGroupItem>
                <ListGroupItem className="list-item delivery-contact border-0 ps-0">
                  <i className="ri-phone-line"></i>{" "}
                  <span className="contact-info">Phone: 01212345678</span>
                </ListGroupItem>
                <ListGroupItem className="list-item delivery-contact border-0 ps-0">
                  <i className="ri-whatsapp-line"></i>
                  <span className="contact-info">Whatsapp: 01212345698</span>
                </ListGroupItem>
                <ListGroupItem className="list-item delivery-contact border-0 ps-0">
                  <i className="ri-mail-line"></i>
                  <span className="contact-info">
                    Email: elmasry@testweb.com
                  </span>
                </ListGroupItem>
              </ListGroup>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
}

export default Contact;
