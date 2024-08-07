import SearchPokemon from "../Search/searchPokemon";
import ash from "../../assets/ash.svg";
import "./style.css";

export default function Avatar({ onClick }) {
  return (
    <>
      <div className="container">
        <SearchPokemon />
        <img
          src={ash}
          alt="Ash-Avatar"
          className="avatar-img"
          onClick={onClick}
        />
      </div>
    </>
  );
}
