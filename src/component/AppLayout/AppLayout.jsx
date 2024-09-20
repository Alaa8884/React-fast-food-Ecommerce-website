import Routes from "../../routes/Routers";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

import "../../styles/appLayout.css"
import Carts from "../Ui/cart/Carts.jsx";
import { useSelector } from "react-redux";


export default function AppLayout() {
  const showCart = useSelector(state=> state.cartUi.showCart)
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
