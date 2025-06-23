import React from "react";
import portadaImg from "../assets/portadaphoto.png";

const Projects = () => (
  <section className="hero-section fullpage-hero geometric-bg">
    <div className="hero-main-content">
      <h1 className="hero-main-title">Featured Projects</h1>
      <ul className="stack-list">
        <li>
          <a
            href="https://frontend-pujaya.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View PujaYa on GitHub">
            PujaYa (Bids and Auctions Platform)
          </a>
        </li>
        <li>
          <a
            href="https://github.com/DABarboza/rick_and_morty_vite"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View Rick and Morty Vite App on GitHub">
            Rick and Morty Vite App
          </a>
        </li>
        <li>
          <a
            href="https://github.com/DABarboza/PI-COUNTRIES"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View PI Countries on GitHub">
            PI Countries
          </a>
        </li>
      </ul>
    </div>
    <img src={portadaImg} alt="Cover" className="hero-bg-art" />
  </section>
);

export default Projects;
