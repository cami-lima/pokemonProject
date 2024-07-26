import React from "react";
import logo from "../../assets/logo.svg";
import "./style.css";

export function Main() {
  return (
    <div className="main-container">
      <img src={logo} className="main-logo" alt="logo" />
      <button className="btn-main">Start</button>
    </div>
  );
}
