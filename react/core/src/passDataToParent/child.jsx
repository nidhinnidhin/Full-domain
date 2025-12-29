import React from "react";

const Child = ({ sendData, removeData, parentData }) => {
  const data = "Hello parent";
  return (
    <div>
      {parentData.length === 0 && (
        <button onClick={() => sendData(data)}>Send data to parent</button>
      )}
      {parentData.length !== 0 && (
        <button onClick={() => removeData()}>Remove content</button>
      )}
    </div>
  );
};

export default Child;
