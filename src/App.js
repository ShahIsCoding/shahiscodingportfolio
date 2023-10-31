import React, { useEffect, useState } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import {Home} from "./Components/pages/Home";
import './Components/assets/css/index.css'

function App() {
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  function isMobile() {
    const regex =
      /Mobi|Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
    return regex.test(navigator.userAgent);
  }
  useEffect(() => {
    const handleWindowMouseMove = (e) => {
      setCoords({ x: e.x, y: e.y });
    };

    window.addEventListener("mousemove", handleWindowMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleWindowMouseMove);
    };
  }, []);
  return (
    <div
      className="App"
      style={{
        backgroundPositionX: `${coords.x}px`,
        backgroundPositionY: `${coords.y}px`,
        minWidth:"360px"
      }}
    >
      <div
        className={`${isMobile() ? "" : "cursor"} zindex-dropdown`}
        style={{ left: `${coords.x}px`, top: `${coords.y}px` }}
      ></div>
      <Home />
    </div>
  );
}

export default App;
