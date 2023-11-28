import { createBrowserRouter } from 'react-router-dom';

import router40 from './40-计事本案例';
import router34 from './34-Router-嵌套路由';
import router32 from './32-Router-抽象路由模块';
import router0 from './common';

const router = createBrowserRouter([
  ...router40,
  ...router34,
  ...router32,
  ...router0,
]);

export default router;