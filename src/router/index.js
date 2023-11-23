import { createBrowserRouter } from 'react-router-dom';


import App from '../App/32-Router-抽象路由模块';
import Login from '../page/login';
import Home from '../page/home';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: '/home',
    element: <Home />
  },
  {
    path: '/login',
    element: <Login />
  }, {
    path: '*',
    element: <div>404</div>
  },
]);

export default router;