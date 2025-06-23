import React from "react";
import profileImg from "../assets/profilePhoto.jpg";

const Presentacion = () => (
  <div
    className="presentation-main-container"
    id="about"
    aria-label="Presentación">
    <div className="presentation-content">
      <div className="presentation-text">
        <h1 className="presentation-title">
          ¡Hola!{" "}
          <span className="wave" role="img" aria-label="Saludo con la mano">
            👋
          </span>
          ,<br />
          <span className="presentation-name">Soy Daniel Barboza,</span>
          <br />
          <span className="presentation-role">Desarrollador Front-end</span>
        </h1>
        <p className="presentation-desc">
          Diseño y desarrollo experiencias que simplifican la vida de las
          personas a través de aplicaciones web y móviles. Trabajo con Figma,
          HTML5, CSS3, JavaScript, React, React Native y Flutter.
        </p>
        <div className="presentation-buttons">
          <a
            href="/contacto"
            className="btn-outline"
            aria-label="Ir a contacto"
            style={{ textDecoration: "none" }}>
            CONTÁCTAME
          </a>
          <a
            href="/proyectos"
            className="btn-black"
            aria-label="Ver proyectos"
            style={{ textDecoration: "none" }}>
            VER PROYECTOS
          </a>
        </div>
      </div>
      <div className="presentation-image-container">
        <img
          src={profileImg}
          alt="Foto de Daniel Barboza"
          className="presentation-image"
          loading="lazy"
        />
      </div>
    </div>
  </div>
);

export default Presentacion;
