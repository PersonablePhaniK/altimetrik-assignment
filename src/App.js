import React, { useState } from "react";
import "./App.css";
import Counter from "./components/Counter";

function App() {
  const [counters, setCounters] = useState({
    counter1: 0,
    counter2: 0,
    counter3: 0,
    counter4: 0,
    counter5: 0,
  });
  const [numberofCounters] = useState([1, 2, 3, 4, 5]);

  const handleCounterIncrement = (name, val) => {
    setCounters({ ...counters, [name]: val + 1 });
  };

  const handleCounterDecrement = (name, val) => {
    setCounters({ ...counters, [name]: val - 1 });
  };

  let ary = Object.values(counters);
  let sumOfValues = ary.reduce((a, b) => a + b, 0);
  let avgOfValuse = Math.round(sumOfValues / numberofCounters.length);
  let min = Math.min(...ary);
  let max = Math.max(...ary);

  return (
    <div className="App">
      {numberofCounters.map((i) => (
        <Counter
          key={i}
          i={i}
          counterval={counters[Object.keys(counters)[i - 1]]}
          handleCounterIncrement={handleCounterIncrement}
          handleCounterDecrement={handleCounterDecrement}
        />
      ))}
      <p>
        Total Sum: {sumOfValues} <br /> Average: {avgOfValuse} <br /> Max: {max}
        <br /> Min: {min}
      </p>
    </div>
  );
}

export default App;
