// 51-useReducer

import { useReducer } from "react";

const reducer = (state, action) => {
  const { type, payload } = action;
  let value = 0;

  switch (type) {
    case 'INC': value = state + 1; break;
    case 'DEC': value = state - 1; break;
    case 'SET': value = payload; break;
    default: value = state;
  }

  return value;
};

function App() {
  const [state, dispatch] = useReducer(reducer, 0);

  return (
    <div className="App">
      {state}
      <br />
      <button onClick={() => dispatch({ type: 'INC' })}>+ 1</button>
      <button onClick={() => dispatch({ type: 'DEC' })}>- 1</button>
      <button onClick={() => dispatch({ type: 'SET', payload: 0 })}>to 0</button>
      <button onClick={() => dispatch({ type: 'SET', payload: 10 })}>to 10</button>
    </div>
  );
}

export default App;
