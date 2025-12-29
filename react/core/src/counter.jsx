// import { useState } from "react";

// function Counter() {
//   const [count, setCount] = useState(0);

//   return (
//     <>
//       <h1>Counter</h1>
//       <button onClick={() => setCount(count + 1)}>+</button>
//       <h2>Count: {count}</h2>
//       <button onClick={() => count > 0 && setCount(count - 1)}>-</button>
//     </>
//   );
// }

// export default Counter;


// Counter with useReducer
import { useReducer } from "react";


function reducer(state, action){
    switch(action.type){
      case 'increment':
        return {count: state.count+1}
      case 'decrement':
        return {count: state.count-1}
    }
  }

function Counter() {
  const [state, dispatch] = useReducer(reducer, {count: 0});

  return (
    <>
      <h1>Counter</h1>
      <button onClick={() => dispatch({type: 'increment'})}>+</button>
      <h2>Count: {state.count}</h2>
      <button onClick={() => state.count > 0 && dispatch({type: 'decrement'})}>-</button>
    </>
  );
}

export default Counter;