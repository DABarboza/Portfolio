import React from "react";

const Navbar = () => (
  <header className="navbar-header">
    <div className="navbar-logo">
      <a href="/">
        <span className="logo-circle">DB</span>
      </a>
    </div>
    <nav className="presentation-navbar" aria-label="Navegación principal">
      <ul>
        <li>
          <a href="/about">ABOUT</a>
        </li>
        <li>
          <a href="/stack">STACK</a>
        </li>

        <li>
          <a href="/certifications">CERTIFICATIONS</a>
        </li>
        <li>
          <a href="/languages">LANGUAGES</a>
        </li>
        <li>
          <a href="/contact">CONTACT</a>
        </li>
      </ul>
    </nav>
    <div className="navbar-social">
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
    </div>
  </header>
);

export default Navbar;
