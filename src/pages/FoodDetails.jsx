import { useState } from "react";
import { useParams } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import Helmet from "../component/helmet/Helmet";
import CommonSection from "../component/Ui/common-section/CommonSection";
import ProductCard from "../component/Ui/product-card/ProductCard";
import allFoodsData from "../assets/data/foodsData";
import usersReviewData from "../assets/data/usersReviewData";
import "../styles/food-details.css";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../store/shopping-cart/cartSlice";

function FoodDetails() {
  const [tabContent, setTabContent] = useState("description");
  const { id } = useParams();
  const dispatch = useDispatch();

  const foodProduct = allFoodsData.find((food) => food.id === id);
  const [previewImg, setPreviewImg] = useState(foodProduct.image01);
  const { title, price, image01, image02, image03, category, desc } =
    foodProduct;

  const description = tabContent === "description";

  const relatedFoods = allFoodsData.filter(
    (foods) => foods.category === category
  );

  const [reviewUserName, setReviewUserName] = useState("");
  const [reviewUserEmail, setReviewUserEmail] = useState("");
  const [reviewUserMsg, setReviewUserMsg] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const usersReview = {};
    usersReview.id = `0${Number(usersReviewData.at(-1).id) + 1}`;
    usersReview.userName = reviewUserName;
    usersReview.userEmail = reviewUserEmail;
    usersReview.userReview = reviewUserMsg;
    usersReview.userImage = null;
    // usersReviewData.push(usersReview);
  }

  function handleAddToCart() {
    const newItem = foodProduct;
    dispatch(addItemToCart(newItem));
  }

  return (
    <Helmet title="Food details">
      <CommonSection title={title} />
      <section>
        <Container>
          <Row>
            <Col lg="2" md="2">
              <div className="food-images d-flex flex-column gap-3">
                <div
                  className="img-item text-center"
                  onClick={() => setPreviewImg(foodProduct.image01)}
                >
                  <img src={image01} alt="Food image" className="w-50" />
                </div>
                <div
                  className="img-item text-center"
                  onClick={() => setPreviewImg(foodProduct.image02)}
                >
                  <img src={image02} alt="Food image" className="w-50" />
                </div>
                <div
                  className="img-item text-center"
                  onClick={() => setPreviewImg(foodProduct.image03)}
                >
                  <img src={image03} alt="Food image" className="w-50" />
                </div>
              </div>
            </Col>
            <Col lg="4" md="4">
              <div className="food-main-img">
                <img src={previewImg} alt="Main food image" className="w-100" />
              </div>
            </Col>
            <Col lg="6" md="6">
              <div className="food-info">
                <h2 className="food-title">{title}</h2>
                <p className="food-price">
                  Price: <span>{price} Egp</span>
                </p>
                <p className="food-category mb-5">
                  Category: <span>{category}</span>
                </p>
                <button onClick={handleAddToCart} className="food-btn">
                  Add to Cart
                </button>
              </div>
            </Col>
            <Col lg="12">
              <div className="tabs d-flex align-items-center gap-4">
                <h4
                  className={`tab-title ${description && "active-tab"}`}
                  onClick={() => setTabContent("description")}
                >
                  Description
                </h4>
                <h4
                  className={`tab-title ${!description && "active-tab"}`}
                  onClick={() => setTabContent("userReview")}
                >
                  Review
                </h4>
              </div>
              {description ? (
                <div className="tab-desc">
                  <p>{desc}</p>
                </div>
              ) : (
                <>
                  <div className="tab-review mb-3 mt-5">
                    {usersReviewData.map((user) => (
                      <div className="review d-flex gap-3" key={user.id}>
                        <img src={user.userImage} alt="" />
                        <div className="userData">
                          <div className="userInfo d-flex align-items-center gap-3">
                            <div className="user-name">{user.userName}</div>
                            <div className="user-email">{user.userEmail}</div>
                          </div>
                          <div className="user-review">{user.userReview}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="tab-form">
                    <form action="" className="form" onSubmit={handleSubmit}>
                      <div className="form-input">
                        <input
                          type="text"
                          placeholder="Enter your name"
                          onChange={(e) => setReviewUserName(e.target.value)}
                          required
                        />
                      </div>
                      <div className="form-input">
                        <input
                          type="text"
                          placeholder="Enter your email"
                          onChange={(e) => setReviewUserEmail(e.target.value)}
                          required
                        />
                      </div>
                      <div className="form-input">
                        <textarea
                          rows={5}
                          type="text"
                          placeholder="Write your review"
                          onChange={(e) => setReviewUserMsg(e.target.value)}
                          required
                        />
                      </div>
                      <button
                        type="submit"
                        className="food-btn d-flex align-items-center justify-content-center w-25"
                      >
                        Submit
                      </button>
                    </form>
                  </div>
                </>
              )}
            </Col>
            <Col lg="12" className=" mb-5">
              <h2>You might also like</h2>
            </Col>
            {relatedFoods.map((food, index) => (
              <Col lg="3" md="4" sm="6" xs="6" key={index}>
                <ProductCard food={food} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
}

export default FoodDetails;
