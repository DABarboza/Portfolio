import React from "react";
import portadaImg from "../assets/portadaphoto.png";

const Contact = () => (
  <section className="hero-section fullpage-hero geometric-bg">
    <div className="hero-main-content">
      <h1 className="hero-main-title">Contacts</h1>
      <ul className="stack-list">
        <li>
          {" "}
          <a href="mailto:Bardanielale@Gmail.com" aria-label="Enviar correo">
            Bardanielale@Gmail.com
          </a>
        </li>
        <li>
          {" "}
          <a
            href="https://www.linkedin.com/in/daniel-barboza-2386022a1/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Ver perfil de LinkedIn">
            Daniel Barboza - LinkedIn
          </a>
        </li>
        <li>
          {" "}
          <a
            href="https://github.com/DABarboza"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Ver perfil de GitHub">
            Daniel Barboza - GitHub
          </a>
        </li>
      </ul>
    </div>
    <img src={portadaImg} alt="Portada" className="hero-bg-art" />
  </section>
);

export default Contact;
