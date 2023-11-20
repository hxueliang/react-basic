// 14-父子组子通信-父传子chilren说明

function Son(props) {
  return <div>this is son</div>;
}

function App() {
  return (
    <div className="App">
      <Son>
      </Son>
    </div>
  );
}

export default App;
