// 50-JIKE案例
import { Suspense, lazy } from 'react';

import { AuthRoute } from '@/components/50/AuthRoute';

const Home = lazy(() => import('@/pages/50/Home'));
const Article = lazy(() => import('@/pages/50/Article'));
const Publish = lazy(() => import('@/pages/50/Publish'));
const Layout = lazy(() => import('../pages/50/Layout'));
const Login = lazy(() => import('../pages/50/Login'));

const router50 = [
  {
    path: '/50',
    element: <AuthRoute>
      <Layout />
    </AuthRoute>,
    children: [
      {
        index: true,
        element: <Suspense fallback="加载中"><Home /></Suspense>,
      },
      {
        path: 'article',
        element: <Suspense fallback="加载中"><Article /></Suspense>,
      },
      {
        path: 'publish',
        element: <Suspense fallback="加载中"><Publish /></Suspense>,
      },
    ]
  },
  {
    path: '/50/login',
    element: <Suspense fallback="加载中"><Login /></Suspense>
  },
];

export default router50;