import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ProyectosPage from "./pages/Proyects";
import ContactoPage from "./pages/Contact";
import StackPage from "./pages/TechStack";
import CertificacionesPage from "./pages/Certifications";
import IdiomasPage from "./pages/Languages";
import NotFound from "./pages/NotFound";
import AboutPage from "./pages/About"; // Asegúrate de que la ruta de importación sea correcta

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/proyects" element={<ProyectosPage />} />
      <Route path="/contact" element={<ContactoPage />} />
      <Route path="/stack" element={<StackPage />} />
      <Route path="/certifications" element={<CertificacionesPage />} />
      <Route path="/languages" element={<IdiomasPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);

export default Router;
