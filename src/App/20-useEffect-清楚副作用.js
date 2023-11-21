// 20-useEffect-清楚副作用

import { useState } from "react";

function Son() {
  return <div>this is son</div>;
}

function App() {
  const [show, setShow] = useState(true);

  return (
    <div className="App">
      {show && <Son />}
      <button onClick={() => setShow(!show)}>click</button>
    </div>
  );
}

export default App;
