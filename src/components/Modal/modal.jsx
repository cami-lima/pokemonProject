import closeIcon from "../../assets/closeIcon.svg";
import pokemon from "../../assets/pokemon.svg";
import pokeball from "../../assets/Pokéball.svg";
import PokemonName from "./pokemonName";
import PokemonInfo from "./pokemonInfo";
import PokemonHabilities from "../Habilities/pokemonHabilities";

import "./style.css";

export default function Modal({ onClose }) {
  return (
    <div className="modal-container">
      <div className="modal-content">
        <button className="btn-close" onClick={onClose}>
          <img src={closeIcon} alt="X icon" className="icon-close" />
        </button>

        <div className="second-container">
          <div className="img-container">
            <img src={pokemon} alt="pokemon-img" className="pokemon-img" />
          </div>
          <PokemonName />
          <PokemonInfo />
          <hr className="info-divider divider" />
          <img src={pokeball} alt="pokeball-img" className="pokeball-img" />
          <PokemonHabilities />
        </div>
      </div>
    </div>
  );
}
