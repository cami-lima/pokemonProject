import React from "react";
import "./style.css";
import Avatar from "../Avatar/avatar";
import QuestionButton from "../Buttons/questionButton";
import PlusButton from "../Buttons/plusButton";

export default function Map() {
  return (
    <div className="background-container">
      <Avatar />
      <div className="container-btn">
        <QuestionButton />
        <QuestionButton />
        <QuestionButton />
        <QuestionButton />
        <QuestionButton />
        <QuestionButton />
        <PlusButton />
      </div>
    </div>
  );
}
