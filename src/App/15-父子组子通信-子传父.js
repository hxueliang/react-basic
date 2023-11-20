// 15-父子组子通信-子传父

function Son(props) {
  return <button
  > this is son</button >;
}

function App() {
  return (
    <div className="App">
      <Son
      >
        this is span
      </Son>
    </div>
  );
}

export default App;
