import MainLayout from 'pages/layout';
import { UIPage } from 'pages/ui';
import { createBrowserRouter } from 'react-router';

export const routes = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <div>Main page</div>,
      },
      {
        path: '/ui',
        element: <UIPage />,
      },
    ],
  },
]);
