import { Col, Container, Row } from "reactstrap";
import Helmet from "../component/helmet/Helmet";
import CommonSection from "../component/Ui/common-section/CommonSection";
import allFoodsData from "../assets/data/foodData";
import ProductCard from "../component/Ui/product-card/ProductCard";
import "../styles/all-foods.css"
import { useState } from "react";

function AllFood() {
  const [searchItem, setSearchItem] = useState("");
  const [foodsdata, setFoodsData] = useState(allFoodsData)

  return (
    <Helmet title="All Foods">
      <CommonSection title="All Foods" />
      <section>
        <Container>
          <Row>
            <Col lg="6" md="6" sm="6" xs="6" className="mb-5 w-50">
              <div className="search-box d-flex align-items-center justify-content-between ">
                <input
                  type="text"
                  name="search-text"
                  placeholder="I'm looking for..."
                  value={searchItem}
                  onChange={e=> setSearchItem(e.target.value)}
                />
                <span>
                  <i className="ri-search-line"></i>
                </span>
              </div>
            </Col>
            <Col lg="6" md="6" sm="6" xs="6" className="text-end w-50">
              <div className="sorting-box">
                <select>
                  <option value="default">Default</option>
                  <option value="ascending">Sort by name (A - Z)</option>
                  <option value="descending">Sort by name (Z - A)</option>
                  <option value="high-price">Sort by price (low first)</option>
                  <option value="low-price">Sort by price (high first)</option>
                </select>
              </div>
            </Col>
            {foodsdata.filter(food => {
              if (searchItem.value === "") return food;
              if(food.title.toLowerCase().includes(searchItem.toLowerCase())) return food
            }).map((food) => (
              <Col lg="3" md="4" sm="6" xs="6" key={food.id}>
                <ProductCard food={food} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
}

export default AllFood;
