import React, { useState, useEffect, useMemo } from "react";

export default function UseMemo1() {
  const [data, setData] = useState(0);
  const [val, setVal] = useState(0);

  const vall = useMemo(
    function mul() {
      console.log(data * 10);
      return data * 10;
    },
    [data]
  );
  return (
    <div>
      <h3>{vall}</h3>
      <h3>{data}</h3>
      <button
        onClick={() => {
          setData(data + 1);
        }}
      >
        Addition
      </button>
      <h3>{val}</h3>
      <button
        onClick={() => {
          setVal(val + 1);
        }}
      >
        Increment
      </button>
    </div>
  );
}
