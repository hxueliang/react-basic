/**
 * 54-React.memo-props的比较机制
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
