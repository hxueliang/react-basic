import { Link, useNavigate } from "react-router-dom";

function Login() {
  const navigator = useNavigate();

  return (
    <div className="login">
      login
      <br />
      {/* 声明式导航 */}
      <Link to="/home">home</Link>
      <br />
      {/* 编程式导航 */}
      <button onClick={() => navigator('/home')}>home</button>
    </div>
  );
}

export default Login;
