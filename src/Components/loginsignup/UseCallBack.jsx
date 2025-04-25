import React, { useState } from "react";
import Comp1 from "./Comp1";
import { useCallback } from "react";
import { data } from "react-router-dom";

function UseCallBack() {
  const [data, setData] = useState(0);
  const [count, setCount] = useState(0);

  function INC() {
    setData(data + 1);
  }

  function DEC() {
    setData(data - 1);
  }

  return (
    <div>
      {data}
      <Comp1 />
      <br></br>
      <button onClick={INC}>Inc</button>
      <br />
      <button onClick={DEC}>Dec</button>
    </div>
  );
}

export default UseCallBack;
