// 55-useCallback

import { memo, useCallback, useState } from "react";

const Input = memo(function Input({ onChange }) {
  console.log('Input渲染了');
  return <input onChange={e => onChange(e.target.value)} />;
});

function App() {
  const changeHander = useCallback(value => console.log(value), []);
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Input onChange={changeHander} />
      <button onClick={() => setCount(count + 1)}>{count}</button>
    </div>
  );
};

export default App;
