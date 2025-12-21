import MainLayout from 'pages/layout';
import AuthLayout from 'pages/login/layout';
import { UIPage } from 'pages/ui';
import { LoginPage } from 'pages/login';
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
  {
    element: <AuthLayout />,
    children: [
      {
        path: '/login',
        element: <LoginPage />,
      },
    ],
  },
]);
