// 25-Redux提交action传参

import { useDispatch, useSelector } from "react-redux";
import { decrement, increasement } from "../store/modules/counterStore";

function App() {
  const { count } = useSelector(state => state.counter);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <button onClick={() => dispatch(decrement())}>-</button>
      <span>{count}</span>
      <button onClick={() => dispatch(increasement())}>+</button>
    </div>
  );
}

export default App;
