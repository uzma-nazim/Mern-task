import React, { useEffect, useState } from "react";

const Divide = () => {
  const [update, setupdate] = useState();
  const [multi, setmulti] = useState(6);
  setInterval(() => {
    const getVal = localStorage.getItem("val");
    setupdate(getVal);
  }, 100);
  useEffect(() => {}, [update]);
  return (
    <>
      <p>Divide</p>
      <p>
        {multi} {update > 1 ? `/ ${update}` : null}{" "}
      </p>
      <div className="box">{update ? multi/ update  : "print new val"}</div>
    </>
  );
};

export default Divide;
