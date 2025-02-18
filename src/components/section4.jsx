import React from "react";
import servicesbtn from "../assets/frames/Frame 1378.svg";
import servicesTagline from "../assets/frames/Innovative Services for Growth.svg";
import services1 from "../assets/frames/Group 21.svg";
import TheButton from "./theButton";

export default function Section4() {
  return (
    <div className="section4">
      <button className="services">
        <img src={servicesbtn} alt="services" />
      </button>

      <div className="servicesTagline">
        <img src={servicesTagline} alt="" />
      </div>

      <div className="offeredServices">
        <img src={services1} alt="Offered Services" />
      </div>

      <TheButton content="Contact Us" messege="Contact Us!" />
    </div>
  );
}
