// 07-useState
// useState是一个React Hook(函数)，它允许我们向组件添加一个状态变量，从而控制影响组件的渲染结果
// 本质：和普通js变量不同的是，状态变量一旦发生变化，组件的视图UI也会跟着变化（数据驱动视图）

// 1、useState是一个函数，返回一个数组;
// 2、数组第一个元素是状态变量。第二个元素是set函数，用来修改状态变量;
// 3、useState的参数将作为count的初始值;

import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount(count + 1);
    // setCount作用
    // 1、用传入的新值修改count
    // 2、重新使用新的count渲染UI
  };
  return (
    <div className="App">
      <button onClick={handleClick}>{count}</button>
    </div>
  );
}

export default App;
