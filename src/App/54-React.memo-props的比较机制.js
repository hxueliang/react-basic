/**
 * 54-React.memo-props的比较机制
 */

import { memo, useMemo, useState } from "react";

const MemoSon = memo(
  function Son(porps) {
    console.log('Son组件渲染');

    return <div>
      this is son
      - {porps.count}
    </div>;
  }
);

const list2 = [1, 2, 3];

function App() {
  console.log('App组件重新渲染');

  const [count, setCount] = useState(0);

  const [countSon, setCountSon] = useState(0);

  const num = 100;
  const list1 = [1, 2, 3];
  const list3 = useMemo(() => [1, 2, 3], []);

  return (
    <div className="App">
      this is app
      <br />
      <button onClick={() => setCount(count + 1)}>+ {count}</button>
      <br />
      <button onClick={() => setCountSon(countSon + 1)}>+ son {countSon}</button>
      {/* <MemoSon count={countSon} /> */}
      {/* <MemoSon count={num} /> */}
      {/* <MemoSon count={list1} /> */}
      {/* <MemoSon count={list2} /> */}
      <MemoSon count={list3} />
    </div>
  );
}

export default App;
