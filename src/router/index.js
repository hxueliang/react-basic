import { createBrowserRouter } from 'react-router-dom';


import App from '../App/34-Router-嵌套路由';
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
  },
  {
    path: '*',
    element: <div>404</div>
  },
]);

export default router;