import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Router from "../../routes/Routers";
import Carts from "../UI/Cart/Carts";
import { useSelector } from "react-redux";

const Layout = () => {
  const showCart = useSelector((state) => state.cartUi.cartIsVisible);
  return (
    <div>
      <Header />
      {showCart && <Carts />}
      <div>
        <Router />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
