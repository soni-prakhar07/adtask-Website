import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const PrimaryButton = ({ text, link }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(link);
  };

  //bootstrap
  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href =
      "https://cdn.jsdelivr.net/npm/bootstrap/dist/css/bootstrap.min.css";
    document.head.appendChild(link);

    return () => {
      document.head.removeChild(link);
    };
  }, []);
  return (
    <button type="button" class="btn btn-primary mx-1" onClick={handleClick}>
      {text}
    </button>
  );
};

export default PrimaryButton;
