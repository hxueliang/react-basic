// 34-Router-嵌套路由
import Layout from '../pages/34/Layout';
import About from '../pages/34/About';
import Board from '../pages/34/Board';

const router34 = [
  {
    path: '/34',
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
];

export default router34;