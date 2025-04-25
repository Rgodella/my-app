import { useState } from "react";

function useData() {
  const [count, setCount] = useState(0);

  function Inc() {
    setCount(count + 1);
  }

  function Dec() {
    setCount(count - 1);
  }

  return [count, Inc, Dec];
}

export default useData;
