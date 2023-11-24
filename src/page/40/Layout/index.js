import { Outlet } from "react-router-dom";
import { Button } from 'antd-mobile';

function Layout() {
  return (
    <div className="Layout">
      一级路由Layout40

      {/* 测试全局样式 */}
      <div>
        <Button color="primary">全局样式</Button>
      </div>

      {/* 测试局部样式 */}
      <div className="theme40">
        <Button color="primary">局部样式</Button>
      </div>

      {/* 二级路由出口 */}
      <Outlet />
    </div>
  );
}

export default Layout;