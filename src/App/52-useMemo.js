// 52-useMemo

import { useState } from "react";

const fib = n => {
  console.log('fib函数执行了');
  if (n < 3) {
    return 1;
  }
  return fib(n - 2) + fib(n - 1);
};

function App() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  const result1 = fib(count1);

  console.log('组件渲染了');
  return (
    <div className="App">
      {count1} - {count2}
      <br />
      <button onClick={() => setCount1(count1 + 1)}>change count1</button>
      <button onClick={() => setCount2(count2 + 1)}>change count2</button>
      <br />
      {result1}
    </div>
  );
}

export default App;
