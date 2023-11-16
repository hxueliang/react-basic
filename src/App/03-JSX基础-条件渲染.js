// 03-JSX基础-条件渲染

const random = Math.random();
const isLogin = random > 0.5;

function App() {
  return (
    <div className="App">
      app.js
      <br />

      {random.toFixed(2)}
      <br />

      {/* 逻辑与 && */}
      {isLogin && <span>欢迎回来</span>}
      <br />

      {/* 三元运算 */}
      {isLogin ? <span>已登录</span> : <span>请登录</span>}
    </div>
  );
}

export default App;
