// 14-父子组子通信-父传子chilren说明

function Son(props) {
  return <div>this is son, {props.children}</div>;
}

function App() {
  return (
    <div className="App">
      <Son>
        <span>this is span</span>
      </Son>
    </div>
  );
}

export default App;
