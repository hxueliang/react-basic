// 18-useEffect-基础

import { useEffect, useState } from "react";

const URL = 'http://geek.itheima.net/v1_0/channels';

function App() {
  const [list, setList] = useState([]);

  useEffect(() => {
    // 获取list
    async function getList() {
      const res = await fetch(URL);
      const json = await res.json();
      // const json = require('../db/18-channels.json'); // 模拟数据
      console.log(json);

      setList(json.data.channels);
    }
    getList();
  }, []);

  return (
    <div className="App">
      <ul>
        {list.map(item => {
          return <li key={item.id}>
            {item.id} - {item.name}
          </li>;
        })}
      </ul>
    </div>
  );
}

export default App;
