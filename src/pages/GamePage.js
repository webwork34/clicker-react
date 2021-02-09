import React from "react";
import GameField from "./../components/GameField";
import InfoField from "./../components/InfoField";

export const GamePage = () => {
  const name = localStorage.getItem("name") || "Player";

  return (
    <div className="container w500">
      <h1>Hello, {name}!</h1>
      <div className="box d_flex">
        <GameField />
        <InfoField />
      </div>
    </div>
  );
};
