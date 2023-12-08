// 62-zustand异步支持

import { useEffect } from "react";
import { create } from "zustand";

import { request } from "@/utils";

const useStore = create(set => ({
  list: [],
  fetchList: async () => {
    const res = await request('/channels');
    set({
      list: res.data.channels
    });
  }
}));

function App() {
  const { list, fetchList } = useStore();

  useEffect(() => {
    fetchList();
  }, [fetchList]);

  return (
    <div className="App">
      <ul>
        {list.map(({ id, name }) => <li key={id}>{name}</li>)}
      </ul>
    </div>
  );
}

export default App;
