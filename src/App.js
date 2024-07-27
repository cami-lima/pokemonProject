import { Routes, Route } from "react-router-dom";
import { Main } from "./components/Main/main.jsx";
import Map from "./components/Map/map";
import "./app.css";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/map" element={<Map />} />
      </Routes>
    </div>
  );
}

export default App;
