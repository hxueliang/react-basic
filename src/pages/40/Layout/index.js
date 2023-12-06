import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { TabBar } from 'antd-mobile';
import {
  BillOutline,
  AddCircleOutline,
  CalculatorOutline,
} from 'antd-mobile-icons';

import { fetchBillList } from "@/store/modules/40-billStore";
import './index.scss';

const tabs = [
  {
    key: '/40',
    title: '月度账单',
    icon: <BillOutline />,
  },
  {
    key: '/40/new',
    title: '记账',
    icon: <AddCircleOutline />,
  },
  {
    key: '/40/year',
    title: '年度账单',
    icon: <CalculatorOutline />,
  },
];

function Layout() {
  const navigator = useNavigate();
  const location = useLocation();
  const { pathname } = location;

  const setRouteActive = (value) => {
    navigator(value);
  };

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBillList());
  }, [dispatch]);

  return (
    <div className="ka-layout theme40">
      <div className="container">
        {/* 二级路由出口 */}
        <Outlet />
      </div>

      <TabBar
        className="footer"
        activeKey={pathname}
        onChange={value => setRouteActive(value)}
      >
        {tabs.map(item => (
          <TabBar.Item key={item.key} icon={item.icon} title={item.title} />
        ))}
      </TabBar>
    </div>
  );
}

export default Layout;