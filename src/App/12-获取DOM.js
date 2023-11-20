// 12-获取DOM
import { useRef } from "react";

function App() {
  const inputRef = useRef(null);
  const getDom = () => {
    console.log(inputRef.current);
    console.log(inputRef.current.value);
  };
  return (
    <div className="App">
      <input ref={inputRef} />
      <button onClick={getDom}>获取DOM</button>
    </div>
  );
}

export default App;
