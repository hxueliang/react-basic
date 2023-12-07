// 56-React.forwardRef

import { forwardRef, useRef } from "react";

// function Son() {
//   return <input />;
// }

const Son = forwardRef((props, ref) => {
  return <input ref={ref} />;
});

function App() {
  const sonRef = useRef(null);
  const onClick = () => {
    console.log(sonRef);
    sonRef.current.focus();
  };
  return (
    <div className="App">
      <Son ref={sonRef} />
      <button onClick={onClick}>focus</button>
    </div>
  );
}

export default App;
