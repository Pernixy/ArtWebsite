import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./screens/Home/Home";
import About from "./screens/About";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
