import { Link, useNavigate } from "react-router-dom";

function Login() {
  const navigator = useNavigate();

  return (
    <div className="login">
      login
      <br />

      {/* 声明式导航 */}
      <Link to="/32">home</Link>
      <br />

      {/* 编程式导航 */}
      <button onClick={() => navigator('/32')}>home</button>
      <br />

      {/* searchParamsw传参 */}
      <button onClick={() => navigator('/32?id=1&name=hxl')}>SearchParamsw传参</button>
      <br />

      {/* params传参 */}
      <button onClick={() => navigator('/32/1001/hxl')}>Params传参</button>
      <br />

    </div>
  );
}

export default Login;
