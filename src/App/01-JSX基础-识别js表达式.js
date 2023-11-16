// 01-JSX基础-识别js表达式

const count = 1024;

function getName() {
  return 'hxl';
}

function App() {
  return (
    <div className="App">
      app.js
      <br />

      {/* 传递字符串 */}
      {'这上字文本'}
      <br />

      {/* 使用js变量 */}
      {count}
      <br />

      {/* 函数调用 */}
      {getName()}
      <br />

      {/* 方法调用 */}
      {new Date().getFullYear()}
      <br />

      {/* 使用js对象 */}
      <div style={{ color: 'red' }}>外层花括号是jsx语法，内层花括号是js对象</div>
    </div>
  );
}

export default App;
