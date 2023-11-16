// 08-useState修改状态的规则
import { useState } from "react";

function App() {
  let [count, setCount] = useState(0);
  let [obj, setObj] = useState({ name: 'hxl', age: 18, sex: 'Male' });

  const handleClick = () => {
    // 1.1、错误写法：直接修改状态，无法引发视图更新
    // count++;
    // console.log(count);
    // 1.2、应该使用setCount修改
    setCount(count + 1);
  };

  const handleClickName = () => {
    // 2.1、错误写法：直接修改对象属性，无法引发视图更新
    // obj.name = 'xlxl';
    // console.log(obj.name);
    // 2.2、修改对象，应该始终传给set方法一个全新的对象来进行修改
    setObj({
      ...obj,
      name: 'xl',
      age: obj.age + 1
    });
  };

  return (
    <div className="App">
      {/* 1.0 修改普通状态 */}
      <button onClick={handleClick}>{count}</button>
      <br />

      {/* 2.0 修改对象状态 */}
      <button onClick={handleClickName}>{obj.name} - {obj.age} - {obj.sex}</button>
    </div>
  );
}

export default App;
