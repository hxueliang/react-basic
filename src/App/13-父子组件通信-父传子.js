// 13-父子组子通信-父传子
// 13.1、父子组子通信-父传子基础
// 13.2、父子组子通信-父传子props说明

function Son(props) {
  console.log(props);
  const { age, isTrue, list, obj, cb, child } = props;
  cb();
  return <div>
    this is son,  {props.name} <br />
    {age} - {isTrue.toString()} - {list.toString()} - {obj.name} - {child}
  </div>;
}

function App() {
  const name = 'this is app name.';
  return (
    <div className="App">
      <Son
        name={name}
        age={18}
        isTrue={true}
        list={[1, 2, 3]}
        obj={{ name: 'react' }}
        cb={() => console.log(123)}
        child={<span>this is jsx.</span>}
      />
    </div>
  );
}

export default App;
