import { useState } from "react";

function useCounter(initalValue = 0) {
  const [count, setCount] = useState(initalValue);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    count > 0 && setCount(count - 1);
  };

  return { count, increment, decrement };
}

export default useCounter;
