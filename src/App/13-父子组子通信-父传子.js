// 13-父子组子通信-父传子

function Son() {
  return <div>this is son</div>;
}

function App() {
  return (
    <div className="App">
      <Son />
    </div>
  );
}

export default App;
