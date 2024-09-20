import { useRef } from "react";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import Helmet from "../component/helmet/Helmet";
import CommonSection from "../component/Ui/common-section/CommonSection";
import "../styles/login.css";

function Register() {
  const signupNameRef = useRef();
  const signupEmailRef = useRef();
  const signupPasswordRef = useRef();

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <Helmet title="Signup">
      <CommonSection title="Signup"></CommonSection>
      <section>
        <Container>
          <Row>
            <Col
              lg="12"
              className=" d-flex flex-column align-items-center gap-5"
            >
              <form
                className="signup-form d-flex flex-column align-items-center gap-4"
                onSubmit={handleSubmit}
                id="signup"
              >
                <input
                  type="text"
                  name="new-user-name"
                  id="new-user-name"
                  placeholder="Enter your full name"
                  required
                  ref={signupNameRef}
                />
                <input
                  type="email"
                  name="new-user-email"
                  id="new-user-email"
                  placeholder="Enter your email"
                  required
                  ref={signupEmailRef}
                />
                <input
                  type="password"
                  name="new-user-password"
                  id="new-user-password"
                  placeholder="Enter your password"
                  required
                  ref={signupPasswordRef}
                />
                <button type="submit" className="signup-btn">
                  Signup
                </button>
              </form>
              <div className="login-link d-flex flex-column align-items-center">
                <p>Already have an account?</p>
                <p>
                  <Link to="/login">Login now</Link>
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
}

export default Register;
