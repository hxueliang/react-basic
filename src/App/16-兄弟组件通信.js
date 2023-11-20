// 16-兄弟组件通信

function A() {
  return (
    <div>
      this is A comment,
      <button
      >send</button>
    </div>
  );
}

function B() {
  return (
    <div>
      this is B comment,
    </div>
  );
}

function App() {
  return (
    <div className="App">
      this is App
      <A />
      <B />
    </div>
  );
}

export default App;
