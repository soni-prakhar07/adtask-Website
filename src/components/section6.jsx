import React from "react";
import testimonialsbtn from "../assets/frames/Frame 1380.svg";
import line1 from "../assets/frames/Line 1.svg";
import line2 from "../assets/frames/Line 2.svg";
import testimonialsTagline from "../assets/frames/Trusted by satisfied clients.svg";
import testimonials from "../assets/frames/Group 23.svg";

export default function Section6() {
  return (
    <div className="section6">
      <button className="testimonialsbtn">
        <img src={testimonialsbtn} alt="testimonials" />
      </button>
      <div className="testimonialsTagline">
        <img src={line2} alt="" />
        <img src={testimonialsTagline} alt="" />
        <img src={line1} alt="" />
      </div>
      <h3>Discover how we’ve driven growth and innovation.</h3>
      <div className="testimonials">
        <img src={testimonials} alt="Testimonials" />
      </div>
    </div>
  );
}
