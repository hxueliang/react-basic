import { useNavigate } from "react-router-dom";

function Home() {
  const navigator = useNavigate();

  return (
    <div className="home">
      home
      <br />
      {/* 编程式导航 */}
      <button onClick={() => navigator('/login')}>login</button>
    </div>
  );
}

export default Home;