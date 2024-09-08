import Slider from "react-slick";
import "../../../styles/testiSlider.css"
import usersReviewData from "../../../assets/data/usersReviewData";

function TestiSlider() {
  const settings = {
    dots: true,
    autoplay: true,
    infinite: true,
    speed: 1000,
    autoplaySpeed: 3000,
    swipeToSlide: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      {usersReviewData.map((user) => (
        <div className="user-review " key={user.id}>
          <p className="user-review-text mb-5">
            <q> {user.userReview} </q>
          </p>
          <div className="user-review-info d-flex align-items-center gap-4">
            <img
              src={user.userImage}
              alt={`${user.userName}-image`}
              className="userImage"
            />
            <h6>{user.userName}</h6>
          </div>
        </div>
      ))}
    </Slider>
  );
}

export default TestiSlider;
