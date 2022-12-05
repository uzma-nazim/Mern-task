import React, { useEffect, useState } from "react";
import "../style/style.css";

const Subtract = () => {
  const [update, setupdate] = useState();
  const [multi, setmulti] = useState(4);
  setInterval(() => {
    const getVal = localStorage.getItem("val");
    setupdate(getVal);
  }, 100);
  useEffect(() => {}, [update]);
  return (
    <>
      <p>Subtract</p>
      <p>
        {multi} {update > 1 ? `- ${update}` : null}{" "}
      </p>
      <div className="box">{update ? multi-update   : "print new val"}</div>
    </>
  );
};

export default Subtract;
