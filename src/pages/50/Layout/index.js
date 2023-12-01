import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { Layout, Menu, Popconfirm } from 'antd';
import {
  HomeOutlined,
  DiffOutlined,
  EditOutlined,
  LogoutOutlined,
} from '@ant-design/icons';

import { fetchUserInfo } from '@/store/modules/50-user';

import './index.scss';

const { Header, Sider } = Layout;

const items = [
  {
    label: '首页',
    key: '/50',
    icon: <HomeOutlined />,
  },
  {
    label: '文章管理',
    key: '/50/article',
    icon: <DiffOutlined />,
  },
  {
    label: '创建文章',
    key: '/50/publish',
    icon: <EditOutlined />,
  },
];

const GeekLayout = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const { userInfo } = useSelector(state => state.user);

  // 点击菜单
  const onMenuClick = (menu) => {
    const path = menu.key;
    navigate(path);
  };

  // 选中的路由key
  const selectedKey = location.pathname;

  // 获取用户信息
  useEffect(() => {
    dispatch(fetchUserInfo());
  }, [dispatch]);

  return (
    <Layout>
      <Header className="header">
        <div className="logo" />
        <div className="user-info">
          <span className="user-name">{userInfo.name}</span>
          <span className="user-logout">
            <Popconfirm title="是否确认退出？" okText="退出" cancelText="取消">
              <LogoutOutlined /> 退出
            </Popconfirm>
          </span>
        </div>
      </Header>
      <Layout>
        <Sider width={200} className="site-layout-background">
          <Menu
            mode="inline"
            theme="dark"
            selectedKeys={selectedKey}
            items={items}
            onClick={onMenuClick}
            style={{ height: '100%', borderRight: 0 }}></Menu>
        </Sider>
        <Layout className="layout-content" style={{ padding: 20 }}>
          <Outlet />
        </Layout>
      </Layout>
    </Layout>
  );
};
export default GeekLayout;