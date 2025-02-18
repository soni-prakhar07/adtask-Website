import React from "react";
import logo from "../assets/logos/adTask.ai.svg";
import trynow from "../assets/Frame 1341.svg";

export default function Navbar() {
  return (
    <div className="topbar">
      <nav className="navbar">
        <div className="navitem">
          <img src={logo} alt="adtask.ai logo" />
        </div>
        <div className="navitem" style={{ marginRight: "42px" }}>
          <a href="/">Resources</a>
          <a href="/">Pricing</a>
          <a href="/">Contact Us</a>
        </div>
        <div className="navitem" style={{ marginRight: "0" }}>
          <button className="tryBtn" onClick={() => alert("Try Now")}>
            <img src={trynow} alt="" />
          </button>
        </div>
      </nav>
      <hr className="hr1" />
    </div>
  );
}
