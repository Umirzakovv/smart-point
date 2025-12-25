import { UIPage } from 'pages/ui';
import { createBrowserRouter } from 'react-router';
import { ROUTES_PATHS } from './routes-paths';

export const routes = createBrowserRouter([
  {
    path: ROUTES_PATHS.MAIN,
    element: <div>Main page</div>,
  },
  {
    path: ROUTES_PATHS.UI,
    element: <UIPage />,
  },
]);
