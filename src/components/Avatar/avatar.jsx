import ash from "../../assets/ash.svg";
import "./style.css";

export default function Avatar() {
  return (
    <div className="container">
      <img src={ash} alt="Ash-Avatar" className="avatar-img" />
    </div>
  );
}
