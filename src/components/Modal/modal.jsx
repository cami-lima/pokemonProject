import closeIcon from "../../assets/closeIcon.svg";
import pokemon from "../../assets/pokemon.svg";
import PokemonName from "./pokemonName";
import PokemonInfo from "./pokemonInfo";

import "./style.css";

export default function Modal({ onClose }) {
  return (
    <>
      <div className="primary-container">
        <button className="btn-close" onClick={onClose}>
          <img src={closeIcon} alt="X icon" className="icon-close" />
        </button>
      </div>
      <div className="second-container">
        <PokemonName />
        <PokemonInfo />
      </div>
      <div className="img-container">
        <img src={pokemon} alt="pokemon-img" className="pokemon-img" />
      </div>
    </>
  );
}
