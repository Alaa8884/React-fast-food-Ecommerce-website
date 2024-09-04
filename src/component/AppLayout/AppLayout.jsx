import Routes from "../../routes/Routers";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

export default function AppLayout() {
  return (
    <div>
      <Header />
      <div>
        <Routes />
      </div>
      <Footer />
    </div>
  );
}
