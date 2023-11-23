import { createBrowserRouter } from 'react-router-dom';


import App from '../App/40-计事本案例';
import Login from '../page/login';
import Home from '../page/home';

import Layout from '../page/Layout';
import About from '../page/About';
import Board from '../page/Board';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: '/layout',
    element: <Layout />,
    children: [
      {
        path: 'about',
        element: <About />
      },
      {
        index: true,
        element: <Board />
      }
    ]
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