import { Routes, Route } from "react-router-dom";
import Main from "./components/Main/main.jsx";
import Map from "./components/Map/map";
import Modal from "./components/Modal/modal.jsx";
import "./app.css";

function App() {
  return (
    <div className="app-container">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/map" element={<Map />} />
        <Route path="/modal" element={<Modal />} />
      </Routes>
    </div>
  );
}

export default App;
