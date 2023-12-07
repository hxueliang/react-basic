// 57-useImperativeHandle

import { forwardRef, useRef } from "react";

const Son = forwardRef((props, ref) => {
  return <input ref={ref} />;
});

function App() {
  const sonRef = useRef(null);
  const onClick = () => {
  };
  return (
    <div className="App">
      <Son ref={sonRef} />
      <button onClick={onClick}>focus</button>
    </div>
  );
}

export default App;

