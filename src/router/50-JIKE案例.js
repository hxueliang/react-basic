// 50-JIKE案例
import { AuthRoute } from '@/components/50/AuthRoute';

import Layout from '../pages/50/Layout';
import Login from '../pages/50/Login';

const router50 = [
  {
    path: '/50',
    element: <AuthRoute>
      <Layout />
    </AuthRoute>
  },
  {
    path: '/50/login',
    element: <Login />
  },
];

export default router50;