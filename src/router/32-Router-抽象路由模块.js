// 32-Router-抽象路由模块
import Login from '../pages/32/login';
import Home from '../pages/32/home';

const router32 = [
  {
    path: '/32',
    element: <Home />
  },
  {
    path: '/32/:type/:name',
    element: <Home />
  },
  {
    path: '/32/login',
    element: <Login />
  },
];

export default router32;