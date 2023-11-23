import { Link, Outlet } from "react-router-dom";

function Layout() {
  return (
    <div className="Layout">
      一级路由Layout
      <br />
      <Link to="/layout/board">面板</Link>
      -
      <Link to="/layout/about">关于</Link>
      {/* 二级路由出口 */}
      <Outlet />
    </div>
  );
}

export default Layout;