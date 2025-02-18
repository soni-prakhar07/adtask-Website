import React from "react";

export default function TheButton({ content, messege }) {
  return (
    <button
      className="TheButton"
      onClick={() => {
        alert(`${messege}`);
      }}
    >
      {content}
    </button>
  );
}
