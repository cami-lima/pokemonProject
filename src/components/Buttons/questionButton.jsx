import "./style.css";
import Icon from "../../assets/Icon.svg";

export default function QuestionButton() {
  return (
    <button className="question-btn">
      <img src={Icon} alt="question-icon" />
    </button>
  );
}
