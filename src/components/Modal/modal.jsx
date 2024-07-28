import closeIcon from "../../assets/closeIcon.svg";
import pokemon from "../../assets/pokemon.svg";

import "./style.css";

export default function Modal() {
  return (
    <>
      <div className="primary-container">
        <div className="second-container"></div>
        <div className="img-container">
          <img src={pokemon} alt="pokemon-img" className="pokemon-img" />
        </div>
        <button className="btn-close">
          <img src={closeIcon} alt="X icon" className="icon-close" />
        </button>
      </div>
    </>
  );
}
