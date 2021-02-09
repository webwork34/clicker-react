import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { Context } from "../context";

const InfoField = () => {
  const history = useHistory();

  const { disable, newRound, chooseDuration, message } = useContext(Context);

  const changePlayer = () => {
    newRound();
    history.push("/");
  };

  const goTorecords = () => {
    newRound();
    history.push("/records");
  };

  return (
    <div className="info_field">
      <h2>Choose duration</h2>

      <form>
        <div>
          <label htmlFor="five">
            5 sec:{" "}
            <input
              type="radio"
              id="five"
              name="seconds"
              value="5"
              onChange={chooseDuration}
              disabled={disable}
            />
          </label>
        </div>

        <div>
          <label htmlFor="ten">
            10 sec:{" "}
            <input
              type="radio"
              id="ten"
              name="seconds"
              value="10"
              onChange={chooseDuration}
              defaultChecked
              disabled={disable}
            />
          </label>
        </div>

        <div>
          <label htmlFor="fifteen">
            15 sec:{" "}
            <input
              type="radio"
              id="fifteen"
              name="seconds"
              value="15"
              onChange={chooseDuration}
              disabled={disable}
            />
          </label>
        </div>

        <button type="button" onClick={newRound} disabled={disable}>
          New round
        </button>
        <button type="button" onClick={changePlayer} disabled={disable}>
          Change player
        </button>
        <button type="button" onClick={goTorecords} disabled={disable}>
          Records
        </button>

        <p className="mt10">{message}</p>
      </form>
    </div>
  );
};

export default InfoField;
