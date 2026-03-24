import React from "react";
import Child from "./child";

const ParentCom = () => {
  function handleData(data) {
    console.log("Data from child:", data);
  }

  return (
    <div>
      <h1>Hello from Parent Component</h1>
      <Child passData={handleData} />
    </div>
  );
};

export default ParentCom;
