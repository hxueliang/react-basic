// 21-自定义Hook

/**
 * 封装自定义hook的能用思路
 * 
 * 1、声明一个以use打头的函数
 * 2、在函数体内封装可重复的逻辑
 * 3、把组件中用到的状态或者回调return出去
 * 4、在哪个组件中要用到这个逻辑，就执行这个函数，解构出对应的状态和回调进行使用
 */

import { useState } from "react";

// 使用自定义Hook改造
function useToggle() {
  const [value, setValue] = useState(true);
  const toggle = () => setValue(!value);

  return {
    value,
    toggle
  };
}

function App() {
  const { value, toggle } = useToggle();

  return (
    <div className="App">
      {value && <div>this is div</div>}
      <button onClick={toggle}>toggle</button>
    </div>
  );
}

export default App;
