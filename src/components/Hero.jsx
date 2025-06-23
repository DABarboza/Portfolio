import React from "react";
import profileImg from "../assets/profilePhoto.jpg";
import portadaImg from "../assets/portadaphoto.png";

const Hero = () => (
  <section className="hero-section fullpage-hero geometric-bg">
    <aside className="hero-social-bar">
      <a
        href="https://www.linkedin.com/in/daniel-barboza-2386022a1/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn">
        <i className="fab fa-linkedin-in"></i>
      </a>
      <a
        href="https://github.com/DABarboza"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub">
        <i className="fab fa-github"></i>
      </a>
      <a href="mailto:Bardanielale@Gmail.com" aria-label="Email">
        <i className="fas fa-envelope"></i>
      </a>
    </aside>
    <div className="hero-main-content">
      <div className="hero-avatar-container">
        <img src={profileImg} alt="Daniel Barboza" className="hero-avatar" />
      </div>
      <h1 className="hero-main-title">HEY, I'M DANIEL BARBOZA</h1>
      <p className="hero-main-desc">
        Frontend focused Web Developer building the Frontend of Websites and Web
        Applications that leads to the success of the overall product
      </p>
    </div>
    <img src={portadaImg} alt="Portada" className="hero-bg-art" />
  </section>
);

export default Hero;
