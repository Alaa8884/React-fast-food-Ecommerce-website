import { useEffect, useMemo, useState } from "react";
import ReactPaginate from "react-paginate";
import debounce from "lodash.debounce";
import { Col, Container, Row } from "reactstrap";
import Helmet from "../component/helmet/Helmet";
import CommonSection from "../component/Ui/common-section/CommonSection";
import allFoodsData from "../assets/data/foodData";
import ProductCard from "../component/Ui/product-card/ProductCard";
import "../styles/all-foods.css";
import "../styles/paginate-page.css";

function AllFood() {
  const [searchItem, setSearchItem] = useState("");

  const [pageNumber, setPageNumber] = useState(0);

function handleChange(e) {
  setSearchItem(e.target.value);
}

  const debouncedResults = useMemo(() => {
    return debounce(handleChange, 700);
  }, []);

  useEffect(() => {
    return () => {
      debouncedResults(searchItem);
      debouncedResults.cancel();
    };
  }, [debouncedResults, searchItem]);
  

  const searchedFood = allFoodsData.filter((food) => {
    if (searchItem === "") return food;
    if (food.title.toLowerCase().includes(searchItem.toLowerCase()))
      return food;
  });
  const productPerPage = 10;
  const visitedPage = pageNumber * productPerPage;
  const displayPage = searchedFood.slice(
    visitedPage,
    visitedPage + productPerPage
  );
  const pageCount = Math.ceil(searchedFood.length / productPerPage);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };
  
  
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
                  
                  onChange={debouncedResults}
                  id="search-result"
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
            {displayPage.length > 0 ? (
              displayPage.map((food) => (
                <Col lg="3" md="4" sm="6" xs="6" key={food.id}>
                  <ProductCard food={food} />
                </Col>
              ))
            ) : (
              <Col
                lg="12"
                md="12"
                sm="12"
                xs="12"
                className="w-100 text-center "
              >
                <p className="not-found-msg">
                  No results found, please try again
                </p>
              </Col>
            )}
            <div>
              <ReactPaginate
                pageCount={pageCount}
                onPageChange={changePage}
                previousLabel="Prev"
                nextLabel="Next"
                containerClassName="pagination-btns"
              />
            </div>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
}

export default AllFood;
