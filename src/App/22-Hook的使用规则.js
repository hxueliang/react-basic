/**
 * 22-Hook的使用规则
 * 
 * 1、只能在组件中或者其他自定义Hook函数中调用
 * 2、只能在组件的顶层调用，不能嵌套在if、for、其他函数中
 */


function App() {
  return (
    <div className="App">
      this is div
    </div>
  );
}

export default App;
