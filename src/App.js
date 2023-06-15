import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import AOS from "aos";
import "animate.css";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./js/Home";
import Subbmit from "./js/Subbmit";

function App() {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/submit" element={<Subbmit />} />
      </Routes>
    </>
  );
}

export default App;
