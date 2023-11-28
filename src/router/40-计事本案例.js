// 40-计事本案例
import Layout from '../pages/40/Layout';
import Month from '../pages/40/Month';
import Year from '../pages/40/Year';
import New from '../pages/40/New';

const router40 = [
  {
    path: '/40',
    element: <Layout />,
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
    element: <New />
  },
];

export default router40;