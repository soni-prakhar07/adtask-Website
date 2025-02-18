import React from "react";
import plansbtn from "../assets/frames/Frame 1379.svg";
import plansTagline from "../assets/frames/Pricing that scales with you.svg";
import line1 from "../assets/frames/Line 1.svg";
import line2 from "../assets/frames/Line 2.svg";
import plans from "../assets/frames/Group 22.svg";
import TheButton from "./theButton";

export default function Section5() {
  return (
    <div className="section5">
      <button className="plansbtn">
        <img src={plansbtn} alt="plans" />
      </button>

      <div className="plansTagline">
        <img src={line2} alt="" />
        <img src={plansTagline} alt="" />
        <img src={line1} alt="" />
      </div>

      <div className="plans">
        <img src={plans} alt="Plans" />
      </div>

      <TheButton content="Compare Features" messege="Compare Features!" />
    </div>
  );
}
