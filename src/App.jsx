import React from "react";
import Navbar from "./components/Navbar";
import "./App.css";

function App({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
    </>
  );
}

export default App;
