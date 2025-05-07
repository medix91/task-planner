import React from "react";
import "./styles/global.css";
import "./styles/variables.css";
import "./styles/responsive.css";

import logo from "./assets/images/logos/logo.png";

function App() {
  return (
    <div className="app-wrapper">
      <div className="logo-wrapper">
        <img src={logo} alt="Logo TAPY" className="logo" />
      </div>
      <h1 className="welcome-text">Bienvenue sur <br/><span>TAPY</span></h1>
    </div>
  );
}

export default App;
