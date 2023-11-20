// 11-表单受控绑定
import { useState } from "react";

function App() {
  const [value, setValue] = useState('');
  return (
    <div className="App">
      {value}
      <br />
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
}

export default App;
