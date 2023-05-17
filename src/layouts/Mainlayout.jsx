import Navbar from "../Components/Uİ/Navbar";
import Footer from "../Components/Uİ/Footer";
import { Outlet, useLocation } from "react-router-dom";

function Mainlayout() {
  const location = useLocation();

  return (
    <div className="">
      {location.pathname !== "/help" &&
        location.pathname !== "/home/accaunt" && <Navbar />}
      <Outlet />
      <Footer />
    </div>
  );
}

export default Mainlayout;
