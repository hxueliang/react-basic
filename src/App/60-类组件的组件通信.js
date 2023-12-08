// 60-类组件的组件通信

import { Component } from "react";

class Son extends Component {
  render() {
    return <div>
      son
    </div>;
  }
}

class Parent extends Component {
  render() {
    return <div>
      parent
      <Son />
    </div>;
  }
}

function App() {
  return (
    <div className="App">
      <Parent />
    </div>
  );
}

export default App;
