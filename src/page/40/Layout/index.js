import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div className="Layout">
      一级路由Layout40
      {/* 二级路由出口 */}
      <Outlet />
    </div>
  );
}

export default Layout;