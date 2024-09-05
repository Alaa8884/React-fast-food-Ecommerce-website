import Routes from "../../routes/Routers";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import "../../styles/appLayout.css"
export default function AppLayout() {
  return (
    <div className="applayout">
      <Header />
      <div>
        <Routes />
      </div>
      <Footer />
    </div>
  );
}
