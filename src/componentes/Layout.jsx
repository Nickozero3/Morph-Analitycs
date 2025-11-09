import "./Layout.css";
import Header from "./Header";
import Footer from "./Footer.jsx";
import WppButton from "./wppButton.jsx";
import HeroImgI from "./HeroImgI.jsx";
import Carrousel from "./Carrousel.jsx";
import Services from "./Services.jsx";
import Collaborations from "./Collaborations.jsx";
import Form from "./Form.jsx";
import MatrixRain from "./MatrixRain.jsx";  // ⬅️ nuevo

const Layout = () => {
  return (
    <div className="container">
      {/* Overlay decorativo Matrix */}
      <MatrixRain
        fontSize={16}          // 14–18 queda bien
        fadeAlpha={0.08}       // 0.05–0.12 (más alto = más rastro)
        color="#09f76b"        // verde Matrix
        spawnChance={0.000049}    // “cada tanto” (subí para más columnas activas)
        speed={0.010}              // velocidad base (1–1.6)
        maxActiveRatio={0.15}  // hasta 35% de columnas activas a la vez
        charChangeRate={1}
        respectReducedMotion={false}   // ⬅️ FORZAR en mobile
      />

      <div className="item header"><Header /></div>

      <div className="item content">
        <Carrousel />
        <HeroImgI />
        <Services />
        <Collaborations />
        <Form />
        <WppButton />
      </div>

      <div className="item footer"><Footer /></div>
    </div>
  );
};

export default Layout;
