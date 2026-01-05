import UIPage from 'pages/ui';
import { createBrowserRouter } from 'react-router';
import { ROUTES_PATHS } from './routes-paths';
import { Home } from 'pages/home/Home';
import { DetailPage } from 'pages/detail/Detail-Page';

export const routes = createBrowserRouter([
  {
    path: ROUTES_PATHS.MAIN,
    element: <Home/>,
  },
  {
    path: ROUTES_PATHS.DETAIL,
    element: <DetailPage/>,
  },
  {
    path: ROUTES_PATHS.UI,
    element: <UIPage />,
  },
]);
