// 17-跨层组件通信

function B() {
  return (
    <div>
      this is B comment,
    </div>
  );
}

function A() {
  return (
    <div>
      this is A comment,
      <B />
    </div>
  );
}

function App() {
  const name = 'this is App name.';
  return (
    <div className="App">
      this is App
      <A />
    </div>
  );
}

export default App;
