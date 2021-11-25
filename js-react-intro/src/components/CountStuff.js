import React, { useState, useEffect } from "react";

const CountStuff = () => {
  const [count, setCount] = useState(0);

  const increaseCount = () => {
    setCount(count + 1);
  };

  const decreaseCount = () => {
    setCount(count - 1);
  };

  useEffect(() => {
    alert("count changed");
  }, [count]);

  return (
    <div>
      <h2>I count stuff</h2>
      <p>{count}</p>
      <button onClick={increaseCount}>Öka</button>
      <button onClick={decreaseCount}>Minska</button>
    </div>
  );
};

export default CountStuff;
