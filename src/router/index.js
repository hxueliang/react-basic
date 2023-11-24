import { createBrowserRouter } from 'react-router-dom';


import App from '../App/40-计事本案例';
import Login from '../page/login';
import Home from '../page/home';

import Layout from '../page/Layout';
import About from '../page/About';
import Board from '../page/Board';

// 40-计事本案例
import Layout40 from '../page/40/Layout';
import Month from '../page/40/Month';
import Year from '../page/40/Year';
import New40 from '../page/40/New';

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
    path: '/40/layout',
    element: <Layout40 />,
    children: [
      {
        index: true,
        element: <Month />
      },
      {
        path: 'year',
        element: <Year />
      }
    ]
  },
  {
    path: '/40/new',
    element: <New40 />
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