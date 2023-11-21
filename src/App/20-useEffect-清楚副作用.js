// 20-useEffect-清楚副作用

import { useEffect, useState } from "react";

function Son() {
  useEffect(() => {
    // 实现副作用逻辑
    const timer = setInterval(() => {
      console.log('定时器执行');
    }, 1000);

    return () => {
      // 清除副作用逻辑
      clearInterval(timer);
    };
  }, []);

  return <div>this is son</div>;
}

function App() {
  const [show, setShow] = useState(true);

  return (
    <div className="App">
      {show && <Son />}
      <button onClick={() => setShow(!show)}>click</button>
    </div>
  );
}

export default App;
