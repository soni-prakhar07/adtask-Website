import React from "react";
import devpartner from "../assets/Frame 1394.svg";
import logo from "../assets/logos/adTask.ai4.svg";
import textCursor from "../assets/textCursor.gif";

export default function Section1() {
  return (
    <div>
      <div className="section1">
        <button className="aidevpartners">
          <img src={devpartner} alt="AI Development Partners" />
        </button>
        <div className="adtasklogo">
          <img src={logo} alt="" className="glowLogo" />
        </div>
        <div className="tagline">
          <h3>
            AdTask AI is your intelligent companion that transforms how
            developers code, test, and deploy. <br />
            Say goodbye to repetitive tasks and hello to accelerated
            productivity.
            <img
              src={textCursor}
              alt=""
              style={{ position: "absolute", height: "35x" }}
            />
          </h3>
        </div>

        <div className="trynowforfree">
          <button
            onClick={() => {
              alert("Try Now For Free!");
            }}
          >
            Try Now For Free
          </button>
        </div>
      </div>
    </div>
  );
}
