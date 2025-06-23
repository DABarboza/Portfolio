import React from "react";
import portadaImg from "../assets/portadaphoto.png";

const TechStack = () => (
  <section className="hero-section fullpage-hero geometric-bg">
    <div className="hero-main-content">
      <h1 className="hero-main-title">Tech Stack</h1>
      <ul className="stack-list">
        <li>JavaScript, SQL</li>
        <li>React, Redux, Vite, HTML5, CSS3</li>
        <li>Node.js, Express, PostgreSQL, Sequelize</li>
        <li>Git, GitHub, Postman, VS Code</li>
        <li>Figma</li>
        <li>React Native</li>
        <li>Flutter</li>
      </ul>
    </div>
    <img src={portadaImg} alt="Cover" className="hero-bg-art" />
  </section>
);

export default TechStack;
