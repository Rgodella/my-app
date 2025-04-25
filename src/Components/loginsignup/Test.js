import React, { memo } from "react";

function Test({ learning }) {
  console.log("TESTING COMPONENT!!");
  return <div></div>;
}

export default memo(Test);
