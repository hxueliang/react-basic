// 17-跨层组件通信

import { createContext, useContext } from "react";

const MsgCtx = createContext();

function B() {
  const msg = useContext(MsgCtx);
  console.log(msg);
  return (
    <div>
      this is B comment, {msg}
    </div>
  );
}

function A() {
  return (
    <div>
      this is A comment,
      <B />
    </div>
  );
}

function App() {
  const name = 'this is App name.';
  return (
    <div className="App">
      <MsgCtx.Provider value={name}>
        this is App
        <A />
      </MsgCtx.Provider>
    </div>
  );
}

export default App;
