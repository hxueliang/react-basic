import { createBrowserRouter } from 'react-router-dom';


import App from '../App/33-Router-路由导航';
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
    path: '/home/:type/:name',
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