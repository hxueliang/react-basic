// 59-类组件的生命周期函数

import { Component, useState } from "react";

class Son extends Component {
  /**
   * 组件渲染完毕执行一次
   * 常用于发送网络请求
   */
  componentDidMount() {
    console.log('组件渲染完毕执行一次，常用于发送网络请求');

    // 开启定时器
    this.timer = setInterval(() => console.log('定时器ing...'), 1000);
  }

  /**
   * 组件卸载的时候的时间自动执行
   * 常用于副作用清理，如：清除定时器，清除事件绑定
   */
  componentWillUnmount() {
    console.log('组件卸载的时候的时间自动执行，常用于副作用清理');

    // 清除定时器
    clearInterval(this.timer);
  }

  render() {
    return <div>son</div>;
  }
}

function App() {
  const [show, setShow] = useState(true);
  return (
    <div className="App">
      {show && <Son />}
      <button onClick={() => setShow(!show)}>change</button>
    </div>
  );
}

export default App;
