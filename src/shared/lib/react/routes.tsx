import { UIPage } from 'pages/ui';
import { createBrowserRouter } from 'react-router';

export const routes = createBrowserRouter([
  {
    path: '/',
    element: <div>Main page</div>,
  },
  {
    path: '/ui',
    element: <UIPage />,
  },
]);
