// 50-JIKE案例
import { AuthRoute } from '@/components/50/AuthRoute';
import Home from '@/pages/50/Home';
import Article from '@/pages/50/Article';
import Publish from '@/pages/50/Publish';

import Layout from '../pages/50/Layout';
import Login from '../pages/50/Login';

const router50 = [
  {
    path: '/50',
    element: <AuthRoute>
      <Layout />
    </AuthRoute>,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'article',
        element: <Article />,
      },
      {
        path: 'publish',
        element: <Publish />,
      },
    ]
  },
  {
    path: '/50/login',
    element: <Login />
  },
];

export default router50;