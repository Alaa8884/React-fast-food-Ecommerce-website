import { useRef } from "react";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import Helmet from "../component/helmet/Helmet";
import CommonSection from "../component/Ui/common-section/CommonSection";
import "../styles/login.css"

function Login() {
 const loginEmailRef = useRef()
  const loginPasswordRef = useRef()
  
  function handleSubmit(e) {
  e.preventDefault()}

  return (
    <Helmet title="Login">
      <CommonSection title="Login"></CommonSection>
      <section>
        <Container>
          <Row>
            <Col
              lg="12"
              className=" d-flex flex-column align-items-center gap-5"
            >
              <form
                className="login-form d-flex flex-column align-items-center gap-4"
                onSubmit={handleSubmit} id="login"
              >
                <input
                  type="email"
                  name="user-email"
                  id="user-email"
                  placeholder="Enter your email"
                  required
                  ref={loginEmailRef}
                />
                <input
                  type="password"
                  name="user-password"
                  id="user-password"
                  placeholder="Enter your password"
                  required ref={loginPasswordRef}
                />
                <button type="submit" className="login-btn">
                  Login
                </button>
              </form>
              <div className="signup-link d-flex flex-column align-items-center">
                <p>Dont&apos;t have an account?</p>
                <p>
                  <Link to="/register"> Create an account.</Link>
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
}

export default Login;
