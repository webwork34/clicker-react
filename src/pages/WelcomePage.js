import React from "react";
import { useHistory } from "react-router-dom";

export const WelcomePage = () => {
  const history = useHistory();

  const goToGame = (e) => {
    e.preventDefault();
    history.push("/game");
    localStorage.setItem("name", e.target[0].value);
  };

  return (
    <div className="container">
      <form className="box" onSubmit={goToGame}>
        <h2> What is your name?</h2>
        <input className="mt10 p5" placeholder="Type your name" type="text" />
        <button ctype="submit">Go to game</button>
      </form>
    </div>
  );
};
