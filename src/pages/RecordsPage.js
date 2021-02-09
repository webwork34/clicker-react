import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { Context } from "../context";

export const RecordsPage = () => {
  const history = useHistory();
  const { changePageHandler, storage } = useContext(Context);

  const gpBack = () => {
    changePageHandler();
    history.push("/game");
  };

  const sec5 = storage("5_sec");
  const sec10 = storage("10_sec");
  const sec15 = storage("15_sec");

  return (
    <div className="container">
      <h1>RECORDS</h1>
      {sec5 && (
        <div className="table">
          <ul>
            <li>
              <b>5 seconds</b>
            </li>
            <li>
              <b>Name</b> - {sec5.nameLS}
            </li>
            <li>
              <b>Clicks</b> - {sec5.counterLS}
            </li>
          </ul>
        </div>
      )}

      {sec10 && (
        <div className="table">
          <ul>
            <li>
              <b>10 seconds</b>
            </li>
            <li>
              <b>Name</b> - {sec10.nameLS}
            </li>
            <li>
              <b>Clicks</b> - {sec10.counterLS}
            </li>
          </ul>
        </div>
      )}

      {sec15 && (
        <div className="table">
          <ul>
            <li>
              <b>15 seconds</b>
            </li>
            <li>
              <b>Name</b> - {sec15.nameLS}
            </li>
            <li>
              <b>Clicks</b> - {sec15.counterLS}
            </li>
          </ul>
        </div>
      )}
      <button onClick={gpBack}>Back to game</button>
    </div>
  );
};
