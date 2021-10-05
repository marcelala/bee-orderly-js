import React from "react";

export default function Button({ theme, onClick, children }) {
  return (
    <button className={`btn ${theme}`} onClick={onClick}>
      {children}{" "}
    </button>
  );
}
