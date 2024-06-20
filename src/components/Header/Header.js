import React, { useEffect, useRef, useState } from "react";
import { Container } from "reactstrap";
import logo from "../../assets/images/res-logo.png";
import { Link, NavLink } from "react-router-dom";
import "../../style/header.css";
import { useDispatch, useSelector } from "react-redux";
import { cartUiActions } from "../../store/shopping-cart/CardUiSlice";

const nav_link = [
  {
    display: "Home",
    path: "/home",
  },
  {
    display: "Foods",
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

const Header = () => {
  const [isAct, setAct] = useState(false);
  const [sticky, setSticky] = useState(false);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const dispatch = useDispatch();

  const toggleCart = () => {
    dispatch(cartUiActions.toggle());
  };
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    });
  }, []);

  return (
    <div className={`header ${sticky ? "header__shrink" : " "}`}>
      <Container>
        <div className="nav_wrappe d-flex align-items-center justify-content-between">
          <div className="logo">
            <img src={logo} alt="helo" />
            <h5>Tasty Treat</h5>
          </div>

          {/* ===========menu============== */}
          <div className={isAct ? "navigation show__menu" : "navigation"}>
            <div className="menu d-flex gap-5 ">
              {nav_link.map((item, index) => (
                <NavLink
                  to={item.path}
                  key={index}
                  className={(item) => (item.isActive ? "active__menu" : "")}
                  onClick={() => setAct(false)}
                >
                  {item.display}
                </NavLink>
              ))}
            </div>
          </div>

          {/* ===================nav-right-icon========= */}
          <div className="nav_right d-flex gap-4 align-items-center">
            <span className="cart_icon " onClick={toggleCart}>
              <i class="ri-shopping-basket-line"></i>
              <span className="cart_badge"> {totalQuantity}</span>
            </span>
            <span className="user">
              <Link to="/login">
                <i class="ri-user-line"></i>
              </Link>
            </span>
            <span className="mobile__menu" onClick={() => setAct(true)}>
              <i class="ri-menu-line"></i>
            </span>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Header;
