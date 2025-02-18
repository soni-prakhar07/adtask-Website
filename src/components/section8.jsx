import React from "react";
import adtask from "../assets/logos/adTask.ai2.svg";
import final from "../assets/frames/Group 25.png";
import logo from "../assets/logos/adTask.ai4.svg";

export default function Section8() {
  return (
    <div className="section8">
      <div style={{ textAlign: "center" }}>
        <img src={adtask} alt="" className="glowLogo" />
      </div>
      <div className="final">
        <img src={final} alt="" />
      </div>
      <div className="trynowforfree" style={{ marginTop: "-350px" }}>
        <button
          onClick={() => {
            alert("Try Now For Free!");
          }}
        >
          Try Now For Free
        </button>
      </div>
      <hr />
      <div className="bottomnav">
        <div className="navi">
          <button>Home</button>

          <button>Resources</button>
          <button>Pricing</button>
          <button>Contact Us</button>
        </div>
        <div className="adlogo">
          <img src={logo} alt="adtask.ai Logo" className="glowLogo" />
        </div>
      </div>
    </div>
  );
}
