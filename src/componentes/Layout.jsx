import "./Layout.css";
import Header from "./Header";
import Footer from "./Footer.jsx";
import WppButton from "./wppButton.jsx";
import HeroImgI from "./HeroImgI.jsx";
import Carrousel from "./Carrousel.jsx";
import Services from "./Services.jsx";

const Layout = () => {
  return (
    <div className="container">
      <div className="item header"><Header /></div>
      <div className="item content">
        <Carrousel/>
        <HeroImgI/>
        <Services/>
        <WppButton /></div>
      <div className="item footer"><Footer /></div>
    </div>
  );
};

export default Layout;
