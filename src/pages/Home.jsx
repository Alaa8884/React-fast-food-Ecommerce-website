import { Col, Container, Row } from "reactstrap";
import { Link } from "react-router-dom";
import Helmet from "../component/Helmet/Helmet";
import Category from "../component/Ui/Category/Category";
import heroImage from "../assets/images/hero.png";
import "../styles/hero-section.css";
import "../styles/home.css";

import featureImg01 from "../assets/images/service-01.png";
import featureImg02 from "../assets/images/service-02.png";
import featureImg03 from "../assets/images/service-03.png";

const featureData = [
  {
    title: "Quick Delivery",
    imgUrl: featureImg01,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam cumque neque .",
  },
  {
    title: "Super Dine In",
    imgUrl: featureImg02,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam cumque neque .",
  },
  {
    title: "Easy Pick Up",
    imgUrl: featureImg03,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam cumque neque .",
  },
];

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
      <section className="category pt-0">
        <Category />
      </section>
      <section className="feature">
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2 className="feature-subtitle mb-4">What we serve?</h2>
              <h3 className="feature-title">Just sit back at home</h3>
              <h3 className="feature-title">
                we will <span>take care</span>
              </h3>
              <p className="mt-4 mb-2 feature-text">
                Enjoy the convenience of ordering online and savor the taste of
                freshly prepared meals without ever leaving home.
              </p>
              <p className="feature-text">
                Our commitment to quality and speed ensures a satisfying dining
                experience every time.
              </p>
            </Col>
            {featureData.map((item, index) => (
              <Col lg="4" md="4" key={index} className="mt-5">
                <div className="feature-item text-center px-5 py-3">
                  <img
                    src={item.imgUrl}
                    alt={item.title}
                    className="w-50 mb-3"
                  />
                  <h3 className="fw-bold mb-3">{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
}

export default Home;
