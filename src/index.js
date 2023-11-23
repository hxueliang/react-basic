import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import App from './App/31-Router-快速体验';
import store from './store';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: '/main',
    element: <div>main</div>
  },
  {
    path: '/login',
    element: <div>login</div>
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <RouterProvider router={router}></RouterProvider>
  </Provider>
);
