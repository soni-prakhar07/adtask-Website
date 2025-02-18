import React from "react";
import contactbtn from "../assets/frames/Frame 1388.svg";
import contactus from "../assets/frames/Group 24.svg";

export default function Section7() {
  return (
    <div className="section7">
      <button className="contactbtn">
        <img src={contactbtn} alt="contact" />
      </button>

      <div className="contactus">
        <img src={contactus} alt="" />
        <form className="contactform" action="">
          <div className="form-group">
            <label htmlFor="">Name</label>
            <br />
            <input type="text" />
          </div>
          <div className="form-group">
            <label htmlFor="">Email</label>
            <br />
            <input type="text" />
          </div>
          <div className="form-group">
            <label htmlFor="">Message</label>
            <br />
            <input
              type="text"
              style={{
                height: "107px",
                boxSizing: "border-box",
                resize: "none",
                textWrap: "hard",
              }}
            />
          </div>
        </form>
      </div>
    </div>
  );
}
