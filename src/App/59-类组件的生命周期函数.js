// 59-类组件的生命周期函数

import { Component } from "react";

class Son extends Component {
  render() {
    return <div>son</div>;
  }
}

function App() {
  return (
    <div className="App">
      <Son />
    </div>
  );
}

export default App;
