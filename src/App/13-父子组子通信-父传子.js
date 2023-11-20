// 13-父子组子通信-父传子

function Son(props) {
  return <div>this is son,  {props.name}</div>;
}

function App() {
  const name = 'this is app name.';
  return (
    <div className="App">
      <Son
        name={name}
      />
    </div>
  );
}

export default App;
