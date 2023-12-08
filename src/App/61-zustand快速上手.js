// 61-zustand快速上手

import { create } from "zustand";

const useStore = create(set => ({
  count: 0,
  // 需要原数据
  inc: () => set(state => ({ count: state.count + 1 })),
  // 固定改为10
  inc10: () => set({ count: 10 }),
  // 根据参数修改
  incSet: (num) => set({ count: num })
}));

function App() {
  const { count, inc, inc10, incSet } = useStore();

  return (
    <div className="App">
      {count}
      <button onClick={inc}>+1，需要原数据</button>
      <button onClick={inc10}>固定10</button>
      <button onClick={() => incSet(100)}>传参100</button>
    </div>
  );
}

export default App;
