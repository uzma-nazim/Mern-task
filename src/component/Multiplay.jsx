import React, { useEffect, useState } from "react";

const Multiplay = () => {
  const [update, setupdate] = useState();
  const [multi, setmulti] = useState(-5);
  setInterval(() => {
    const getVal = localStorage.getItem("val");
    setupdate(getVal);
  }, 100);
  useEffect(() => {}, [update]);
  return (
    <>
      <p>Multiply</p>
      <p>
        {multi} {update > 1 ? `* ${update}` : null}{" "}
      </p>
      <div className="box">{update ? update * multi : "print new val"}</div>
    </>
  );
};

export default Multiplay;
