import React from "react";
import features from "../assets/frames/Frame 64.svg";
import featuresTitle from "../assets/frames/FeatureText.svg";
import line2 from "../assets/frames/Line 2.svg";
import line1 from "../assets/frames/Line 1.svg";
import featuresWindow from "../assets/frames/Frame 1348.svg";

export default function Section3() {
  return (
    <div className="section3">
      <button className="features">
        <img src={features} alt="features" />
      </button>
      <div className="featuresTitle">
        <img src={line2} alt="" />
        <img src={featuresTitle} alt="" />
        <img src={line1} alt="" />
      </div>

      <div className="featuresWindow">
        <h3>
          Experience lightning-fast setup with intelligent features designed to
          optimize <br /> your workflow instantly.
        </h3>
        <img src={featuresWindow} alt="" />
      </div>
    </div>
  );
}
