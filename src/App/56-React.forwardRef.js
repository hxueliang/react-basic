// 56-React.forwardRef

function Son() {
  return <input />;
}

function App() {
  return (
    <div className="App">
      <Son />
      <button>focus</button>
    </div>
  );
}

export default App;
