// 16-兄弟组件通信-通过状态提升实现

import { useState } from "react";

function A({ onGetAName }) {
  const name = 'this is A name';
  return (
    <div>
      this is A comment,
      <button
        onClick={() => onGetAName(name)}
      >send</button>
    </div>
  );
}

function B({ name }) {
  return (
    <div>
      this is B comment,
      {name}
    </div>
  );
}

function App() {
  const [name, setName] = useState('');
  const getAName = data => {
    setName(data);
  };
  return (
    <div className="App">
      this is App
      <A onGetAName={getAName} />
      <B name={name} />
    </div>
  );
}

export default App;
