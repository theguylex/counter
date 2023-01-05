import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0)
  
  function increment() {
    setCount(prevCount => prevCount + 1) 
  }

  function decrement(){
    setCount(prevCount => prevCount - 1)

  function reset (){
    setCount(0)
  }
  }
  return (
    <div className="App">
      <h1>count:{count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default App;
