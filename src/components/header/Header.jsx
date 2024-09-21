import { useEffect, useRef } from "react";
import { Container } from "reactstrap";
import { Link, NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import logo from "../../assets/images/res-logo.png";
import { toggleCart } from "../../store/shopping-cart/cartUiSlice";
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
  const menuEl = useRef(null);
  const overLayEl = useRef(null);
  const headerEl = useRef(null);
  const totalQuantity = useSelector(state => state.cart.totalQuantity);
  
  const dispatch =  useDispatch()

  useEffect(function () {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerEl.current.classList.add("header-sticky");
      } else {
        headerEl.current.classList.remove("header-sticky");
      }
      return () => window.removeEventListener("scroll");
    });
  }, []);

  function handleShowMenu() {
    menuEl.current.classList.toggle("show-menu");
    overLayEl.current.classList.toggle("show-menu");
  }

  function handleToggleCart() {
    dispatch(toggleCart());
  }
  return (
    <header className="header header-sticky" ref={headerEl}>
      <Container>
        <div className="nav-bar d-flex align-items-center justify-content-between h-100">
          <div className="logo">
            <NavLink to={navLink[0].path}>
              <img src={logo} alt="resturant logo" />
              <h1>El Masrawy</h1>
            </NavLink>
          </div>
          <div className="navigation" ref={menuEl}>
            <div className="menu d-flex align-items-center j gap-5">
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
          <div className="nav-side d-flex align-items-center justify-content-between gap-4">
            <span className="cart-btn" onClick={handleToggleCart}>
              <i className="ri-shopping-cart-2-line"></i>
              <span className="cart-count">{totalQuantity}</span>
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
        </div>
        <div
          className="over-lay "
          onClick={handleShowMenu}
          ref={overLayEl}
        ></div>
      </Container>
    </header>
  );
}

export default Header;
Header;
