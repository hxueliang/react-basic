// 15-父子组子通信-子传父

import { useState } from "react";

function Son(props) {
  console.log(props);
  const msg = 'this is son msg';
  return <button
    onClick={() => props.onGetSonMsg(msg)}
  > this is son</button >;
}

function App() {
  const [msg, setMsg] = useState('');
  const getMsg = (data) => {
    console.log(data);
    setMsg(data);
  };
  return (
    <div className="App">
      <p>{msg}</p>
      <Son
        onGetSonMsg={getMsg}
      >
        this is span
      </Son>
    </div>
  );
}

export default App;
