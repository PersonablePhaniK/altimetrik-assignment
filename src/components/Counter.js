import React from "react";

function Counter({
  i,
  counterval,
  handleCounterIncrement,
  handleCounterDecrement,
}) {
  let name = `counter${i}`;
  return (
    <div>
      <button onClick={() => handleCounterIncrement(name, counterval)} style={componentStyle}>
        +
      </button>
      <button onClick={() => handleCounterDecrement(name, counterval)}style={componentStyle} >
        -
      </button>
      <span value={counterval} name={name}>
        counter-{i} : {counterval}
      </span>
    </div>
  );
}

let componentStyle = {cursor: 'pointer', marginRight: '5px', marginBottom: '5px', padding: '5px 10px'}

export default Counter;
