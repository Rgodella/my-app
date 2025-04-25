import React, { useEffect, useRef, useState } from "react";

export default function UseReff() {
  const [count, setcount] = useState(0);

  //ref Hook to AVOID the re-rendering
  const refValue = useRef();

  useEffect(() => {
    refValue.current.style.background = "red";
  }, []);
  return (
    <>
      <div>
        <h3>Hello!!!</h3>
        <h2> {count} </h2>
        <button
          ref={refValue}
          onClick={() => {
            setcount((count) => count + 1);
          }}
        >
          Count {count}
        </button>

        {/* <div className="con">
        <button
          type="button"
          onClick={(refValue.current.style.display = "none")}
        >
          {" "}
          display
        </button>
      </div> */}
      </div>
      <div className="contain">
        <button
          onClick={() => {
            refValue.current.style.display = "none";
          }}
        >
          btn
        </button>
      </div>
    </>
  );
}
