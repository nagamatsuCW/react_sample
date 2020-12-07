import React, { useState } from "react";
import ClickTest from './ClickTest'

export default () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h3 data-test="count">count: {count}</h3>
      <button id="countUp" data-test="count-up" onClick={() => setCount(count + 1)}>⬆︎</button>
      <button id="countDown" data-test="count-down" onClick={() => setCount(count - 1)}>⬇︎</button>
      <ClickTest title="countUp" clickHandler={() => setCount(count + 1)} />
    </div>
  );
};