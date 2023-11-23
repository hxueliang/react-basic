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
      <br />

      {/* searchParamsw传参 */}
      <button onClick={() => navigator('/home?id=1&name=hxl')}>SearchParamsw传参</button>
      <br />

      {/* params传参 */}
      <button onClick={() => navigator('/home/1001/hxl')}>Params传参</button>
      <br />

    </div>
  );
}

export default Login;
