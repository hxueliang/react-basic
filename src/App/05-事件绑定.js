// 05-事件绑定

function App() {

  // 1.1 无参，基础绑定
  // const handleClick = () => {
  //   console.log('点击了btn';
  // };

  // 1.2 无参，获取事件对象
  // const handleClick = (e) => {
  //   console.log('点击了btn', e);
  // };

  // 2.1 自定义参数
  // const handleClick = (name) => {
  //   console.log('点击了btn', name);
  // };

  // 3.1 自定义参数、获取事件对象
  const handleClick = (e, name) => {
    console.log('点击了btn', e, name);
  };

  return (
    <div className="App">
      {/* 1.0 无参数 */}
      {/* <button onClick={handleClick}>点击</button> */}

      {/* 2.0 有自定义参数 */}
      {/* <button onClick={() => handleClick('hxl')}>点击</button> */}

      {/* 3.0 有事件对象，有自定义参数 */}
      <button onClick={(e) => handleClick(e, 'hxl')}>点击</button>
    </div>
  );
}

export default App;
