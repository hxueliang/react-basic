// 26-Redux异步状态操作

import { useDispatch, useSelector } from "react-redux";
import { decrement, increasement, toNum } from "../store/modules/counterStore";

function App() {
  const { count } = useSelector(state => state.counter);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <button onClick={() => dispatch(decrement())}>-</button>
      <span>{count}</span>
      <button onClick={() => dispatch(increasement())}>+</button>
      <br />
      <button onClick={() => dispatch(toNum(0))}>to 0</button>
      <button onClick={() => dispatch(toNum(10))}>to 10</button>
      <button onClick={() => dispatch(toNum(20))}>to 20</button>
    </div>
  );
}

export default App;
