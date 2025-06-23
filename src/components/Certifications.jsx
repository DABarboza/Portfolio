import React from "react";
import portadaImg from "../assets/portadaphoto.png";

const Certifications = () => (
  <section
    className="hero-section fullpage-hero geometric-bg"
    style={{
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column",
    }}>
    <div
      className="hero-main-content"
      style={{
        background: "rgba(255,255,255,0.95)",
        borderRadius: "24px",
        boxShadow: "0 8px 32px rgba(0,0,0,0.12)",
        padding: "3rem 2rem",
        maxWidth: "500px",
        margin: "2rem auto",
        position: "relative",
        zIndex: 2,
      }}>
      <h1 className="hero-main-title" style={{ textAlign: "center" }}>
        Certifications
      </h1>
      <ul
        className="stack-list"
        style={{
          textAlign: "center",
          listStyle: "none",
          padding: 0,
        }}>
        <li
          style={{
            margin: "1rem 0",
            fontWeight: 500,
          }}>
          Full Stack Developer – Henry Bootcamp
        </li>
        <li
          style={{
            margin: "1rem 0",
            fontWeight: 500,
          }}>
          <a
            href="https://cert.efset.org/m9J7Pi"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "#222",
              textDecoration: "underline",
              fontWeight: 500,
            }}>
            English B1 Certificate – EF SET
          </a>
        </li>
      </ul>
    </div>
    {/* Footer decorativo solo en esta página */}
    <footer
      style={{
        width: "100%",
        marginTop: "2rem",
        display: "flex",
        justifyContent: "center",
      }}>
      <img
        src={portadaImg}
        alt="Decorative footer"
        style={{
          width: "90%",
          maxWidth: "1200px",
          minWidth: "300px",
          opacity: 0.5,
          filter: "blur(0.1px)",
          pointerEvents: "none",
          transition: "all 0.3s",
        }}
      />
    </footer>
  </section>
);

export default Certifications;
