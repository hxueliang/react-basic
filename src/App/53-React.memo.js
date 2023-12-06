/**
 * 53-React.memo
 * 
 * 作用：允许子组件，在Props没有改变的情况下，不跟随父组件重新渲染
 * React组件的默认渲染机制：只要父组件重新渲染，子组件就会重新渲染
 */

import { memo, useState } from "react";

const MemoSon = memo(
  function Son() {
    console.log('Son组件渲染');

    return <div>
      this is son
    </div>;
  }
);

function App() {
  console.log('App组件重新渲染');

  const [count, setCount] = useState(0);

  return (
    <div className="App">
      this is app
      <br />
      <button onClick={() => setCount(count + 1)}>+ {count}</button>
      <MemoSon />
    </div>
  );
}

export default App;
