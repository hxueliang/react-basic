import { useNavigate, useParams, useSearchParams } from "react-router-dom";

function Home() {
  const navigator = useNavigate();

  // 接收参数
  const [searchParams] = useSearchParams();
  const id = searchParams.get('id');
  const name = searchParams.get('name');

  // 接收参数
  const params = useParams();
  const { type, name: pName } = params;

  return (
    <div className="home">
      home
      <br />

      {/* 编程式导航 */}
      <button onClick={() => navigator('/login')}>login</button>
      <br />

      {id && <div>{id} - {name}</div>}

      {type && <div>{type} - {pName}</div>}
    </div>
  );
}

export default Home;