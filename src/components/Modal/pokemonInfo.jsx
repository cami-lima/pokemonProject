import "./style.css";

export default function PokemonInfo() {
  return (
    <div className="info-container">
      <div className="info-content first-child">
        <h6 className="info-pokemon">HP</h6>
        <p className="values-info">45/45</p>
      </div>
      <hr className="info-divider" />
      <div className="info-content ">
        <h6 className="info-pokemon">ALTURA</h6>
        <p className="values-info">0.7 m</p>
      </div>
      <hr className="info-divider" />
      <div className="info-content last-child">
        <h6 className="info-pokemon">PESO</h6>
        <p className="values-info">6.9 kg</p>
      </div>
    </div>
  );
}
