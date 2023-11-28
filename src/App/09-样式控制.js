// 09-样式控制
import '@a/style/09-index.css';

const style = {
  color: 'green',
  fontSize: '32px'
};

function App() {
  return (
    <div className="App">
      {/* 1.1、行内样式1（不推荐） */}
      <div style={{ color: 'red' }}>行内样式1（不推荐）</div>

      {/* 1.2、行内样式2（优化写法） */}
      <div style={style}>行内样式2（优化写法）</div>

      {/* 2、class类名控制（推荐） */}
      <div className="blue">class类名控制（推荐）</div>
    </div>
  );
}

export default App;
