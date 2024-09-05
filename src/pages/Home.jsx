import { Col, Container, Row } from "reactstrap";
import Helmet from "../component/Helmet/Helmet";
import heroImage from "../assets/images/hero.png";
import "../styles/hero-section.css"
import { Link } from "react-router-dom";
function Home() {
  return (
    <Helmet title="Home">
      <section className="px-4">
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="hero-content">
                <h2 className="mb-4">Easy way to make an order</h2>
                <h3 className="mb-5">
                  <span>HUNGRY?</span> Just wait <br /> food at
                  <span> your door.</span>
                </h3>
                <p>
                  Our food delivery service brings the best restaurants in town
                  straight to your door. Order online and enjoy a delicious meal
                  without ever leaving home. Fast, fresh, and convenient -
                  that&apos;s the promise of El Masrawy
                </p>
                <div className="hero-btns d-flex align-items-center gap-5">
                  <button className="order-btn d-flex align-items-center justify-content-center">
                    <span> Order now</span>{" "}
                    <i className="ri-arrow-right-s-line"></i>
                  </button>
                  <button className="allfoods-btn">
                    <Link to="/foods">See all foods</Link>
                  </button>
                </div>

                <div className="hero-sevices d-flex align-items-center gap-5 mt-4">
                  <p className=" d-flex align-items-center gap-3">
                    <span className="services-icon services-shipping-icon">
                      <i className="ri-car-line"></i>
                    </span>{" "}
                    No shipping charge
                  </p>
                  <p className="d-flex align-items-center gap-3">
                    <span className="services-icon services-secure-icon">
                      {" "}
                      <i className="ri-shield-user-line"></i>
                    </span>{" "}
                    Your information are 100% secure
                  </p>
                </div>
              </div>
            </Col>
            <Col lg="6" md="6">
              <div className="hero-image">
                <img
                  src={heroImage}
                  alt="Hero Section image"
                  className="w-100"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
}

export default Home;
