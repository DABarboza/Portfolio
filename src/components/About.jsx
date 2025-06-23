import React from "react";
import profileImg from "../assets/profilePhoto.jpg";
import portadaImg from "../assets/portadaphoto.png";

const About = () => (
  <section className="hero-section fullpage-hero geometric-bg">
    <div className="hero-main-content about-card">
      <div className="hero-avatar-container">
        <img src={profileImg} alt="Daniel Barboza" className="hero-avatar" />
      </div>
      <h1 className="hero-main-title">Daniel Barboza</h1>
      <h2 className="about-role">Full Stack Developer certified by Henry</h2>
      <p className="about-summary">
        I am a passionate developer focused on building modern web applications
        and solving real-world problems through code. I have experience in
        JavaScript, React, Node.js, and current technologies. I am always eager
        to learn and collaborate on challenging projects.
      </p>
      <ul className="about-list">
        <li>
          <strong>Currently:</strong> Working at{" "}
          <span>PujaYa (Frontend & Backend)</span>
        </li>
        <li>
          <strong>Learning:</strong> TypeScript, Next.js, cloud deployment
        </li>
        <li>
          <strong>Collaborating on:</strong> Open source and team projects
        </li>
      </ul>
      <div className="about-contact-links">
        <a
          href="https://www.linkedin.com/in/daniel-barboza-2386022a1/"
          target="_blank"
          rel="noopener noreferrer"
          className="about-link">
          <i className="fab fa-linkedin-in"></i> LinkedIn
        </a>
        <a href="mailto:Bardanielale@Gmail.com" className="about-link">
          <i className="fas fa-envelope"></i> Email
        </a>
      </div>
    </div>
    <img src={portadaImg} alt="Cover" className="hero-bg-art" />
  </section>
);

export default About;
