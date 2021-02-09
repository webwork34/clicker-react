import React, { useContext } from "react";
import { Context } from "../context";

const GameField = () => {
  const { redBtnDisable, btnName, countClicks, counter, seconds } = useContext(
    Context
  );

  return (
    <div className="game_field">
      <p>
        <b>{seconds}</b> seconds left
      </p>
      <button
        className="game_btn"
        onClick={countClicks}
        disabled={redBtnDisable}
      >
        {btnName}
      </button>
      <p className="mt10">
        You have made - <b>{counter === -1 ? 0 : counter}</b> clicks.
      </p>
    </div>
  );
};

export default GameField;
