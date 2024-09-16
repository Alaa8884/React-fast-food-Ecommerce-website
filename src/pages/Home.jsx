import { useEffect, useState } from "react";
import { Col, Container, ListGroup, ListGroupItem, Row } from "reactstrap";
import { Link } from "react-router-dom";
import Helmet from "../component/helmet/Helmet";
import Category from "../component/Ui/category/Category";
import ProductCard from "../component/Ui/product-card/ProductCard";
import Slider from "../component/Ui/slider/TestiSlider";

import "../styles/hero-section.css";
import "../styles/home.css";

import heroImage from "../assets/images/hero.png";
import featureImg01 from "../assets/images/service-01.png";
import featureImg02 from "../assets/images/service-02.png";
import featureImg03 from "../assets/images/service-03.png";
import foodCategoryImg_1 from "../assets/images/hamburger.png";
import foodCategoryImg_2 from "../assets/images/pizza.png";
import foodCategoryImg_3 from "../assets/images/bread.png";
import whySectionImg from "../assets/images/location.png";
import testmonialsImg from "../assets/images/network.png";

import foodsData from "../assets/data/foodsData";

const featureDetails = [
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
  const [category, setCategory] = useState("All");
  const [allFoods, setAllFoods] = useState(foodsData);
  const [hotPizza, setHotPizza] = useState([]);

  useEffect(function () {
    const filteredPizza = foodsData.filter(
      (pizzaFood) => pizzaFood.category === "Pizza"
    );
    const hotPizzaSlice = filteredPizza.slice(0, 4);
    setHotPizza(hotPizzaSlice);
  }, []);

  useEffect(
    function () {
      if (category === "ALL") setAllFoods(foodsData);
      if (category === "PIZZA") {
        const filtredFoods = foodsData.filter(
          (food) => food.category === "Pizza"
        );
        setAllFoods(filtredFoods);
      }
      if (category === "BURGER") {
        const filtredFoods = foodsData.filter(
          (food) => food.category === "Burger"
        );
        setAllFoods(filtredFoods);
      }
      if (category === "BREAD") {
        const filtredFoods = foodsData.filter(
          (food) => food.category === "Bread"
        );
        setAllFoods(filtredFoods);
      }
    },
    [category]
  );

  return (
    <Helmet title="Home">
      <section className="px-4 pt-0">
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
      <section className="feature pt-0">
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
            {featureDetails.map((item, index) => (
              <Col lg="4" md="6" sm="6" key={index} className="mt-5">
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
      <section className="products pt-0">
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2>Popular Foods</h2>
            </Col>
            <Col lg="12" className="">
              <div className="foods-category d-flex align-items-center justify-content-center gap-3 p-4">
                <button
                  className={`all-foods ${
                    category === "ALL" ? "foodBtnActive" : ""
                  }`}
                  onClick={() => setCategory("ALL")}
                >
                  All Foods
                </button>
                <button
                  className={`humburger-btn category-btn d-flex align-items-center gap-3 ${
                    category === "BURGER" ? "foodBtnActive" : ""
                  }`}
                  onClick={() => setCategory("BURGER")}
                >
                  <img src={foodCategoryImg_1} alt="humburger image" />
                  <span>Burger</span>
                </button>
                <button
                  className={`pizza-btn category-btn d-flex align-items-center gap-3 ${
                    category === "PIZZA" ? "foodBtnActive" : ""
                  }`}
                  onClick={() => setCategory("PIZZA")}
                >
                  <img src={foodCategoryImg_2} alt="pizza image" />
                  <span>Pizza</span>
                </button>
                <button
                  className={`bread-btn category-btn d-flex align-items-center gap-3 ${
                    category === "BREAD" ? "foodBtnActive" : ""
                  }`}
                  onClick={() => setCategory("BREAD")}
                >
                  <img src={foodCategoryImg_3} alt="bread image" />
                  <span>Bread</span>
                </button>
              </div>
            </Col>
            {allFoods.map((food) => (
              <Col lg="4" md="4" sm="6" xs="6" key={food.id} className="mt-5">
                <ProductCard food={food} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>
      <section className="why-section pt-0">
        <Container>
          <Row>
            <Col lg="6" md="6">
              <img src={whySectionImg} alt="" className="w-100" />
            </Col>
            <Col lg="6" md="6">
              <div className="why-info d-flex flex-column gap-4">
                <h2 className="why-title">
                  Why <span>El Masrawy Resturant?</span>
                </h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dolorum, minus. Tempora reprehenderit a corporis velit,
                  laboriosam vitae ullam, repellat illo sequi odio esse iste
                  fugiat dolor, optio incidunt eligendi deleniti!
                </p>
                <ListGroup>
                  <ListGroupItem className=" border-0 p-0 ">
                    <p className="why-item d-flex align-items-center gap-3">
                      <i className="ri-checkbox-circle-fill"></i>{" "}
                      <span>Fresh and tasty foods</span>
                    </p>
                    <p>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Quia, voluptatibus.
                    </p>
                  </ListGroupItem>
                  <ListGroupItem className=" border-0 p-0">
                    <p className="why-item d-flex align-items-center gap-3">
                      <i className="ri-checkbox-circle-fill"></i>{" "}
                      <span>Quality support</span>
                    </p>
                    <p>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Quia, voluptatibus.
                    </p>
                  </ListGroupItem>
                  <ListGroupItem className=" border-0 p-0">
                    <p className="why-item d-flex align-items-center gap-3">
                      <i className="ri-checkbox-circle-fill"></i>{" "}
                      <span>Order from any location</span>
                    </p>
                    <p>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Quia, voluptatibus.
                    </p>
                  </ListGroupItem>
                </ListGroup>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="hot-pizza pt-0">
        <Container>
          <Row>
            <Col lg="12">
              <div className="hot-pizza-title text-center mb-5">
                <h2>Hot Pizza</h2>
              </div>
            </Col>
          </Row>
          <Row>
            {hotPizza.map((item, i) => (
              <Col lg="3" md="4" sm="4" xs="6" key={i} className="mb-4">
                <ProductCard food={item} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>
      <section className="testimonial">
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="testimonial-content">
                <h5 className="testimonial-subtitle">Testimonial</h5>
                <h2 className="testimonial-title">
                  What our <span>customers</span> are saying
                </h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Distinctio quasi qui minus quos sit perspiciatis inventore
                  quis provident placeat fugiat!
                </p>
                <Slider />
              </div>
            </Col>
            <Col lg="6" md="6">
              <img
                src={testmonialsImg}
                alt="Testmonial Image"
                className="w-100"
              />
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
}

export default Home;
