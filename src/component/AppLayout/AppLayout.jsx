import Routes from "../../routes/Routers";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

import "../../styles/appLayout.css"
import Carts from "../Ui/cart/carts";


export default function AppLayout() {
  return (
    <div className="applayout">
      <Header />
      <Carts/>
      <div>
        <Routes />
      </div>
      <Footer />
    </div>
  );
}
