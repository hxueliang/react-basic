// 60-类组件的组件通信

import { Component } from "react";

class Son extends Component {
  state = {
    count: 1
  };

  render() {
    return <div>
      son
      <br />

      {/* 【1.2 父传子】：子接 */}
      {this.props.msg}
      <br />

      {/* 【2.3 子传父】：子调父函数，并传参 */}
      <button onClick={() => {
        this.props.onGetSonCount(this.state.count);
      }}>子传父</button>
    </div>;
  }
}

class Parent extends Component {
  state = {
    msg: 'parent msg'
  };

  // 【2.1 子传父】：父定义函数
  getSonCount(count) {
    console.log(count);
  }

  render() {
    return <div>
      parent
      {/* 【1.1 父传子】：父传 */}
      {/* 】2.2 子传父】：父传传函数 */}
      <Son
        msg={this.state.msg}
        onGetSonCount={this.getSonCount}
      />
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
