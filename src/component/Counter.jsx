import React, { useEffect, useState } from "react";

const Counter = () => {
  const [toggle, settoggle] = useState(false);
  let [counter, setCounter] = useState(1);
  const handlePlus = () => {
    setCounter(counter + 1);
    settoggle(true);
  };
  const handleMinus = () => {
    setCounter(counter>0?counter-1:counter );
  };

  useEffect(() => {
    if (toggle) {
      localStorage.setItem("val", counter);
    } else {
      localStorage.clear();
    }
  }, [counter]);
  return (
    <>
      <br />
      <br />

      <button onClick={handlePlus}>+</button>
      <span className="box">{counter >= 0 ? counter : "0"}</span>

      <button onClick={handleMinus}>-</button>
      <br />
      <br />
    </>
  );
};

export { Counter };
