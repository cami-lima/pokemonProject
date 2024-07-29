import React, { useState } from "react";
import "./style.css";
import Avatar from "../Avatar/avatar";
import Modal from "../Modal/modal";
import QuestionButton from "../Buttons/questionButton";
import PlusButton from "../Buttons/plusButton";

export default function Map() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="background-container">
      <Avatar onClick={openModal} />
      <div className="container-btn">
        <QuestionButton />
        <QuestionButton />
        <QuestionButton />
        <QuestionButton />
        <QuestionButton />
        <QuestionButton />
        <PlusButton />
      </div>
      <div className="modal-container">
        {isModalOpen && <Modal onClose={closeModal} />}
      </div>
    </div>
  );
}
