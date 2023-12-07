// 57-useImperativeHandle

import { forwardRef, useImperativeHandle, useRef } from "react";

const Son = forwardRef((props, ref) => {
  const inputRef = useRef(null);
  const focusHandler = () => {
    inputRef.current.focus();
  };
  // 暴露子组件方法
  useImperativeHandle(ref, () => {
    return {
      focusHandler,
    };
  });
  return <input ref={inputRef} />;
});

function App() {
  const sonRef = useRef(null);
  const onClick = () => {
    sonRef.current.focusHandler();
  };
  return (
    <div className="App">
      <Son ref={sonRef} />
      <button onClick={onClick}>focus</button>
    </div>
  );
}

export default App;

