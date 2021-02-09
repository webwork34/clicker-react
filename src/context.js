import React, { useState, useEffect } from "react";

export const Context = React.createContext();

export const ContextProvider = ({ children }) => {
  const [disable, setDisable] = useState(false);
  const [redBtnDisable, setRedBtnDisable] = useState(false);
  const [btnName, setBtnName] = useState("Click to start");
  const [counter, setCounter] = useState(-1);
  const [controlTimer, setControlTimer] = useState(false);
  const [seconds, setSeconds] = useState(10);
  const [prevDuration, setPrevDuration] = useState(0);
  const [changedPage, setChangedPage] = useState(false);
  const [endRound, setEndRound] = useState(false);
  const [key, setKey] = useState("");
  const [message, setMessage] = useState("");
  const name = localStorage.getItem("name") || "Player";

  const storage = (storageKey, data = null) => {
    if (!data) {
      return JSON.parse(localStorage.getItem(storageKey));
    }

    localStorage.setItem(storageKey, JSON.stringify(data));
  };

  const checkLs = (checkKey) => {
    const data = storage(checkKey);
    return data;
  };

  useEffect(() => {
    setSeconds(10);
  }, [changedPage]);

  useEffect(() => {
    if (counter !== -1) {
      if (!checkLs(key)) {
        setMessage(
          `Congratulation!!! You set new record for ${parseInt(
            key
          )} sec = ${counter} clicks :)`
        );
        storage(key, { nameLS: name, counterLS: counter });
      } else {
        const { counterLS } = checkLs(key);

        counter > counterLS
          ? setMessage(
              `Congratulation!!! You set new record for ${parseInt(
                key
              )} sec = ${counter} clicks :)`
            )
          : setMessage(
              `You are not good enough for being the champion :(. Curently record is ${counterLS} clicks.`
            );
      }

      checkLs(key);
      storage(key, { nameLS: name, counterLS: counter });
    }
  }, [endRound]);

  const changePageHandler = () => {
    setChangedPage((prev) => !prev);
  };

  const chooseDuration = (e) => {
    setSeconds(+e.target.value);
    setPrevDuration(+e.target.value);
  };

  const startTimer = () => {
    if (!controlTimer) {
      setControlTimer(true);

      const timer = setInterval(() => {
        setSeconds((prev) => {
          if (prev === 1) {
            setRedBtnDisable(true);
            clearInterval(timer);
            setDisable(false);
            setEndRound(true);
          }
          return prev - 1;
        });
      }, 1000);
    }
  };

  const countClicks = () => {
    if (btnName === "Click to start") {
      setDisable(true);
      setBtnName("Click to count");
      startTimer();
      setKey(`${seconds}_sec`);
    }

    setCounter(counter + 1);
  };

  const newRound = () => {
    setBtnName("Click to start");
    setRedBtnDisable(false);
    setControlTimer(false);
    setCounter(-1);
    setEndRound(false);
    setSeconds(seconds || prevDuration || 10);
    setMessage("");
  };

  return (
    <Context.Provider
      value={{
        disable,
        redBtnDisable,
        btnName,
        countClicks,
        counter,
        seconds,
        newRound,
        chooseDuration,
        changePageHandler,
        message,
        storage,
      }}
    >
      {children}
    </Context.Provider>
  );
};
