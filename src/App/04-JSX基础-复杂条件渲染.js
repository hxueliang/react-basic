// 04-JSX基础-复杂条件渲染

const random = Math.random().toFixed(2) * 100;

// 定义文章类型
const articleType = random % 3; // 0: 无图，1: 1图，2: 2图

/**
 * 定义文章函数
 * @returns 文章模板
 */
function getArticleTem(type) {
  let jsx = '';
  if (type === 0) {
    jsx = <div>我是无图文章</div>;
  } else if (type === 1) {
    jsx = <div>我是单图文章</div>;
  } else if (type === 2) {
    jsx = <div>我是双图文章</div>;
  }
  return jsx;
}

function App() {
  return (
    <div className="App">
      app.js
      <br />

      {random}
      <br />

      {getArticleTem(articleType)}
    </div>
  );
}

export default App;
