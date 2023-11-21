// 21-自定义Hook

import { useState } from "react";

function App() {
  const [value, setValue] = useState(true);
  const toggle = () => setValue(!value);

  return (
    <div className="App">
      {value && <div>this is div</div>}
      <button onClick={toggle}>toggle</button>
    </div>
  );
}

export default App;
