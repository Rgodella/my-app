import React, { useCallback, useState } from "react";
import Test from "./Test";

export default function UseCllBack() {
  const [data, setData] = useState(0);
  const [val, setVal] = useState(0);

  //   const learn = useCallback(() => {
  //     console.log("x");
  //   }, [val]);

  const learn = function () {
    console.log("x");
  };

  // const learn = useCallback(() => {
  //   console.log("x");
  // }, [val]);
  return (
    <div>
      <h2>useCallBack Hook</h2>
      <p>To Enhance the Performance of React Application</p>
      <h3>{data}</h3>
      <Test leraning={learn} />
      <button
        onClick={() => {
          setData(data + 1);
        }}
      >
        Addition
      </button>

      {val}
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
