// 19-useEffect-依赖项说明

import { useEffect, useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

  // 没有依赖项
  useEffect(() => {
    console.log('【1+all】没有依赖项：初次渲染执行一次，后续每次更新都会执行');
  });

  // 依赖项为[]
  useEffect(() => {
    console.log('【1+0】依赖项为[]：初次渲染执行一次');
  }, []);

  // 依赖项为[count]
  useEffect(() => {
    console.log('【1+指定】依赖项为[count]：初次渲染执行一次，count更新时执行');
  }, [count]);

  return (
    <div className="App">
      <button onClick={() => setCount(count + 1)}>count: {count}</button>
      <br />
      <button onClick={() => setCount2(count2 + 1)}>count2: {count2}</button>
    </div>
  );
}

export default App;
