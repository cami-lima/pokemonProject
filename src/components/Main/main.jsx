import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo.svg";
import "./style.css";

export default function Main() {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/map");
  };

  return (
    <div className="main-container">
      <img src={logo} className="main-logo" alt="logo" />
      <button className="btn-main" onClick={handleButtonClick}>
        Start
      </button>
    </div>
  );
}
