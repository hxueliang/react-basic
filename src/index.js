import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';

import store from './store';
import router from './router';

// 40-计事本案例
import '@a/style/40-reset.css';
import '@a/theme/40.css';

// 50-JIKE案例
import 'normalize.css';
import './index.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <RouterProvider router={router}></RouterProvider>
  </Provider>
);
