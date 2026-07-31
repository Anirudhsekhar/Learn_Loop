import React from "react";
import Logo from "./assets/Logo.png";
import "../src/Style/Navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <div className="main_logo">
        <img src={Logo} id="logo" className="logo" />
      </div>
      <div className="nav_links">
         <h1 id="main_heading" className="logo">
          Learn Loop
        </h1>
        <a id="home" className="nav_com">
          {" "}
          Home{" "}
        </a>
        <a id="about" className="nav_com">
          {" "}
          About{" "}
        </a>
        <a id="how" className="nav_com">
          {" "}
          How it works{" "}
        </a>
        <a id="community" className="nav_com">
          {" "}
          Community{" "}
        </a>
        <a id="signup" className="nav_com">
          {" "}
          Signup{" "}
        </a>
        <a id="login" className="nav_com">
          {" "}
          Login{" "}
        </a>
      </div>
    </div>
  );
}

export default Navbar;
