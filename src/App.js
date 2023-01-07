import { useState, useReducer } from "react";
import "./App.css";

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
      case "reset":
        return {count: 0}
    default:
      return state;
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  

  function increment() {
    dispatch({ type: "increment" });
  }

  function decrement() {
    dispatch({ type: "decrement" });
  }

  function reset() {
    dispatch({type: "reset"})
  }

  return (
    <div className="App">
      <h1>count:{state.count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default App;
