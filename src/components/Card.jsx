import React from "react";
import charmander from "../public/images/charmander.png";

const Card = () => {
  return (
    <>
      <div className="card">
        <h2>1</h2>
        <img src={charmander} alt="charmander" />
        <h2>charmander</h2>
      </div>
    </>
  );
};

export default Card;
