// 58-classAPI

import { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
  };

  setCount(num) {
    this.setState({
      count: this.state.count + num
    });
  };

  render() {
    return <>
      <button onClick={() => this.setCount(2)}>+2: {this.state.count}</button>
    </>;
  }
}

function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

export default App;
