import React, { useState } from "react";

type Information = {
  name: string;
  description: string;
};

function Counter() {
  const [info, setInformation] = useState<Information | null>(null);
  const [count, setCount] = useState<number>(0);
  const onIncrease = () => setCount(count + 1);
  const onDecrease = () => setCount(count - 1);
  //   const onString = () => setCount("1");
  return (
    <div>
      <h1>{count}</h1>
      <div>
        <button onClick={onIncrease}>+1</button>
        <button onClick={onDecrease}>-1</button>
        {/* <button onClick={setInformation('hello')}>String</button> */}
      </div>
    </div>
  );
}

export default Counter;
