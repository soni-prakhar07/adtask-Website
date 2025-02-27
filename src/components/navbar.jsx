import React from "react";
import logo from "../assets/logos/adTask.ai.svg";
import trynow from "../assets/Frame 1341.svg";
import PrimaryButton from "./primaryButton";

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
        <div className="navitem" style={{ marginRight: "0" }}>
          <PrimaryButton text="Login" link={"/login"} />
        </div>
      </nav>
      <hr className="hr1" />
    </div>
  );
}
