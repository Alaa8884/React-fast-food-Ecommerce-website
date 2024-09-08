import { Col, Container, Row } from "reactstrap";
import "../../../styles/category.css"
import categoryImage01 from "../../../assets/images/category-01.png";
import categoryImage02 from "../../../assets/images/category-02.png";
import categoryImage03 from "../../../assets/images/category-03.png";
import categoryImage04 from "../../../assets/images/category-04.png";



const categoryData = [
  {
    display: "Fast Foods",
    imgUrl: categoryImage01,
  },
  {
    display: "Asian Food",
    imgUrl: categoryImage03,
  },
  {
    display: "Pizza",
    imgUrl: categoryImage02,
  },
  {
    display: "Row Meat",
    imgUrl: categoryImage04,
  },
];

function Category() {
  return (
    <Container>
      <Row>
        {categoryData.map((data, index) => (
          <Col lg="3" md="4" sm="6" xs="6" key={index}>
            <div className="category-item d-flex align-items-center justify-content-center gap-3 mt-4">
              <div>
                <img
                  src={data.imgUrl}
                  alt={data.display}
                  className="category-img"
                />
              </div>
              <h5>{data.display}</h5>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
export default Category;
