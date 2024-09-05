import { useRef } from "react";
import { Container } from "reactstrap";
import logo from "../../assets/images/res-logo.png";
import { Link, NavLink } from "react-router-dom";
import "../../styles/header.css";

const navLink = [
  {
    display: "Home",
    path: "/home",
  },
  {
    display: "All Foods",
    path: "/foods",
  },
  {
    display: "Cart",
    path: "/cart",
  },
  {
    display: "Contact",
    path: "/contact",
  },
];

function Header() {
  const menu = useRef(null);
  const overLay = useRef(null);

  

  function handleShowMenu() {
    menu.current.classList.toggle("show-menu");
    overLay.current.classList.toggle("show-menu");
  }
  return (
    <header className="header header-sticky">
      <Container>
        <nav className="nav-bar d-flex align-items-center justify-content-between ">
          <div className="logo">
            <img src={logo} alt="resturant logo" />
            <h1>El Masrawy</h1>
          </div>
          <div className="navigation" ref={menu}>
            <div className="menu d-flex align-items-center gap-5">
              <span className="close-btn" onClick={handleShowMenu}>
                <i className="ri-close-circle-fill"></i>
              </span>
              {navLink.map((navItem, index) => (
                <NavLink
                  key={index}
                  to={navItem.path}
                  className={(navClass) =>
                    navClass.isActive ? "active-menu" : ""
                  }
                  onClick={handleShowMenu}
                >
                  {navItem.display}
                </NavLink>
              ))}
            </div>
          </div>{" "}
          <div className="nav-side d-flex align-items-center gap-4">
            <span className="cart-btn">
              <i className="ri-shopping-cart-2-line"></i>
              {/* <i className="ri-shopping-cart-fill"></i> */}
              <span className="cart-count">10</span>
            </span>
            <span className="user">
              <Link to="/login">
                <i className="ri-user-line"></i>
              </Link>
            </span>
            <span className="mobile-menu" onClick={handleShowMenu}>
              <i className="ri-menu-line"></i>
            </span>
          </div>
        </nav>
        <div className="over-lay" onClick={handleShowMenu} ref={overLay}></div>
      </Container>
    </header>
  );
}

export default Header;
Header;
