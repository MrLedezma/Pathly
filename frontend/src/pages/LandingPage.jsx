import React from "react";
import logo from "../assets/pathlylogo.png";
import "../styles/LandingPage.css";
import sobreNosotrosImg from "../assets/sobre-nosotros.png";

const SobreNosotros = () => {
  return (
    <section id="sobre-nosotros" className="sobre-nosotros-section">
      <div className="sobre-nosotros-container">
        <div className="texto">
          <h2>Sobre Nosotros</h2>
          <p>
            En <strong>Pathly</strong>, creemos que cada estudiante merece una oportunidad clara para construir su futuro profesional, sin importar sus recursos.  
            Nuestra plataforma combina la inteligencia artificial, mentoría personalizada y acceso a recursos gratuitos para guiarte paso a paso en el camino hacia la carrera que siempre has soñado.  
            ¡Descubre tu potencial, traza tu ruta y haz realidad tus metas con Pathly!
          </p>
        </div>
        <div className="imagen">
          <img src={sobreNosotrosImg} alt="Estudiantes aprendiendo" />
        </div>
      </div>
    </section>
  );
};

const LandingPage = () => {
  return (
    <div>
      <header className="landing-header">
        <img src={logo} alt="Logo Pathly" className="landing-logo" />
        <h1 className="navbar-center-title">Bienvenido</h1>
      </header>

      <SobreNosotros />

      {/* Aquí puedes agregar más secciones */}
    </div>
  );
};

export default LandingPage;
