import "./Layout.css";
import Header from "./Header";
import Footer from "./Footer.jsx";
import WppButton from "./wppButton.jsx";
import HeroImgI from "./HeroImgI.jsx";
// import Carrousel from "./Carrousel.jsx";
import Services from "./Services.jsx";
import Collaborations from "./Collaborations.jsx";
import Form from "./Form.jsx";


const Layout = () => {
  return (
    <div className="container">
      <div className="item header"><Header /></div>
      <div className="item content">
        {/* <Carrousel/> */}
        <HeroImgI/>
        <Services/>
        <Collaborations/>
        <Form></Form>
        <WppButton /></div>
      <div className="item footer"><Footer /></div>
    </div>
  );
};

export default Layout;
