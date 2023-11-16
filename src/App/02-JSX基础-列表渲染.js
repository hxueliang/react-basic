// 02-JSX基础-列表渲染

const list = [
  { id: 1, name: 'html' },
  { id: 2, name: 'css' },
  { id: 3, name: 'js' },
];

function App() {
  return (
    <div className="App">
      app.js

      {/* 列表渲染 */}
      <ul>
        {list.map(item => <li key={item.id}>{item.name}</li>)}
      </ul>
    </div>
  );
}

export default App;
