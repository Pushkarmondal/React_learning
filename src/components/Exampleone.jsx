import { useState } from "react";

const Exampleone = () => {
  const [count, setCount] = useState(() => {
    const initialcount = 10;
    return initialcount;
  });
  const increment = () => {
    setCount((prevCount) => {
      return prevCount + 1;
    });
  };
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={increment}>Click</button>
    </div>
  );
};

export default Exampleone;
