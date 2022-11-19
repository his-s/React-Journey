import { useState } from "react";
import "./App.css";
function App() {
  const [count, setCount] = useState(0);
  function incrementCount() {
    setCount((prevCount) => prevCount + 1);
  }
  function decrementCount() {
    if (count <= 0) {
      return;
    }
    setCount((prevCount) => prevCount - 1);
  }
  return (
    <div className="app">
      <button onClick={incrementCount}>+</button>
      <span>{count}</span>
      <button onClick={decrementCount}>-</button>
    </div>
  );
}

export default App;
