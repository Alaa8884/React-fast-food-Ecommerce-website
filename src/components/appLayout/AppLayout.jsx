import { useSelector } from "react-redux";

import Routes from "../../routes/Routers.jsx";
import Footer from "../footer/Footer.jsx";
import Header from "../header/Header.jsx";
import Carts from "../Ui/cart/Carts.jsx";

import "../../styles/appLayout.css";

export default function AppLayout() {
  const showCart = useSelector((state) => state.cartUi.showCart);
  return (
    <div className="applayout">
      <Header />
      {showCart && <Carts />}
      <div>
        <Routes />
      </div>
      <Footer />
    </div>
  );
}
