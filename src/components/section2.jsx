import React from "react";
import ytlogo from "../assets/logos_youtube-icon.svg";
import adtask from "../assets/logos/adtask.ai3.svg";
import logo1 from "../assets/partners/Amazon.png";
import logo2 from "../assets/partners/Cocacola.png";
import logo3 from "../assets/partners/Google.png";
import logo4 from "../assets/partners/Salesforce.png";
import logo5 from "../assets/partners/Sony.png";
import logo6 from "../assets/partners/Workday.png";
import logo7 from "../assets/partners/intel.png";
import pl1 from "../assets/platforms/cib_visual-studio-code.svg";
import pl2 from "../assets/platforms/devicon-plain_visualstudio.svg";
import pl3 from "../assets/platforms/devicon_azure.svg";
import pl4 from "../assets/platforms/devicon_neovim.svg";

export default function Section2() {
  const logos = [logo1, logo2, logo3, logo4, logo5, logo6, logo7];
  return (
    <div className="section2">
      <div className="ytvid">
        <img
          src={ytlogo}
          alt="YT LOGO"
          style={{
            width: "96px",
            height: "67px",
            marginLeft: "auto",
            marginRight: "auto",
            zIndex: "1",
            position: "absolute",
          }}
        />

        <img
          src={adtask}
          alt="adtask.ai Logo"
          className="glowLogo"
          style={{
            marginLeft: "auto",
            marginTop: "auto",
            marginBottom: "auto",
            marginRight: "auto",
            position: "absolute",
            zIndex: "-1",
          }}
          onClick={() => {
            alert("Insert YouTube Video Here!");
          }}
        />
      </div>
      <div className="ticker">
        <div className="ticker-track">
          {[...logos, ...logos].map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt={`Logo ${index}`}
              className="ticker-logo"
            />
          ))}
        </div>
      </div>
      <div className="platforms">
        <h3 className="intro">
          Adtask AI is available on you favorite platforms:
        </h3>
        <div className="platform-logos">
          <button data-label="VS Code">
            <img src={pl1} alt="Visual Studio Code" />
          </button>
          <button data-label="Visual Studio">
            <img src={pl2} alt="Visual Studio" />
          </button>
          <button data-label="NeoVim">
            <img src={pl4} alt="NeoVim" />
          </button>
          <button data-label="Azure">
            <img src={pl3} alt="Azure" />
          </button>
          <button data-label="Visual Studio">
            <img src={pl2} alt="Visual Studio" />
          </button>
        </div>
      </div>
    </div>
  );
}
