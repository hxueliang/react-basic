// 06-组件基础

// 定义组件
function Button() {
  const handleClick = () => console.log('点击按钮');

  return <button onClick={handleClick}>点击</button>;
}

function App() {
  return (
    <div className="App">
      {/* 自闭合 */}
      <Button />
      <br />

      {/* 成双标签 */}
      <Button></Button>
    </div>
  );
}

export default App;
