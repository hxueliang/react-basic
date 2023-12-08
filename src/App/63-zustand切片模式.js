// 63-zustand切片模式

import { useEffect } from "react";
import { create } from "zustand";

import { request } from "@/utils";

// counter
const createCounterStore = set => ({
  count: 0,
  inc: () => set(state => ({ count: state.count + 1 })),
});

// list
const createListStore = set => ({
  list: [],
  fetchList: async () => {
    const res = await request('/channels');
    set({
      list: res.data.channels
    });
  }
});

// 组合
const useStore = create((...a) => ({
  ...createCounterStore(...a),
  ...createListStore(...a),
}));

function App() {
  const { count, inc, list, fetchList } = useStore();

  useEffect(() => {
    fetchList();
  }, [fetchList]);

  return (
    <div className="App">
      <button onClick={inc}>{count}</button>
      <ul>
        {list.map(({ id, name }) => <li key={id}>{name}</li>)}
      </ul>
    </div>
  );
}

export default App;
