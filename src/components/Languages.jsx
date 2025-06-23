import React from "react";
import portadaImg from "../assets/portadaphoto.png";

const Languages = () => (
  <section className="hero-section fullpage-hero geometric-bg">
    <div className="hero-main-content">
      <h1 className="hero-main-title">Languages</h1>
      <ul className="stack-list">
        <li>Spanish (Native)</li>
        <li>
          <a
            href="https://cert.efset.org/m9J7Pi"
            target="_blank"
            rel="noopener noreferrer">
            English (B1, EF SET)
          </a>
        </li>
        <li>Portuguese (Basic)</li>
      </ul>
    </div>
    <img src={portadaImg} alt="Cover" className="hero-bg-art" />
  </section>
);

export default Languages;
