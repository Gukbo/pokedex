import React from "react";
import "./style.css";
import Card from "./components/Card";
function App() {
  return (
    <>
      <div className="container">
        <div className="left-content">
          <Card />
        </div>
        <div className="right-content"></div>
      </div>
    </>
  );
}

export default App;
