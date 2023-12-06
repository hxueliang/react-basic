// 26-Redux异步状态操作

import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import { decrement, increasement, toNum } from "@/store/modules/24-counterStore";
import { fetchChannelList } from "@/store/modules/26-channelStore";

function App() {
  const { count } = useSelector(state => state.counter);
  const { channelList } = useSelector(state => state.channel);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchChannelList());
  }, [dispatch]);

  return (
    <div className="App">
      <button onClick={() => dispatch(decrement())}>-</button>
      <span>{count}</span>
      <button onClick={() => dispatch(increasement())}>+</button>
      <br />
      <button onClick={() => dispatch(toNum(0))}>to 0</button>
      <button onClick={() => dispatch(toNum(10))}>to 10</button>
      <button onClick={() => dispatch(toNum(20))}>to 20</button>
      <br />
      <ul>
        {channelList.map(item => <li key={item.id}>{item.name}</li>)}
      </ul>
    </div>
  );
}

export default App;
