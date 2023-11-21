/**
 * 22-Hook的使用规则
 * 
 * 1、只能在组件中或者其他自定义Hook函数中调用
 * 2、只能在组件的顶层调用，不能嵌套在if、for、其他函数中
 */

import { useState } from "react";

// 错误用法1：
// React Hooks must be called in a React function component or a custom React Hook function.
// const [value, setValue] = useState('');

function App() {
  // 错误用法2：
  // React Hooks must be called in the exact same order in every component render.
  // if (Math.random() > 0.5) {
  //   const [value, setValue] = useState('');
  // }

  return (
    <div className="App">
      this is div
    </div>
  );
}

export default App;
