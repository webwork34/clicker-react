import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { Context } from "../context";

export const WelcomePage = () => {
  const history = useHistory();
  const { changePageHandler } = useContext(Context);

  const goToGame = (e) => {
    e.preventDefault();
    changePageHandler();
    localStorage.setItem("name", e.target[0].value);
    history.push("/game");
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
