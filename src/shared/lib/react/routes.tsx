import UIPage from 'pages/ui';
import { createBrowserRouter } from 'react-router';
import { ROUTES_PATHS } from './routes-paths';
import { Home } from 'pages/home';
import { DetailPage } from 'pages/detail';
import { NotFound } from 'pages/not-found';
import { Basket } from 'widgets/home/basket';

export const routes = createBrowserRouter([
  {
    path: ROUTES_PATHS.MAIN,
    element: <Home />,
  },
  {
    path: ROUTES_PATHS.DETAIL,
    element: <DetailPage />,
  },
  {
    path: ROUTES_PATHS.BASKET,
    element: <Basket />,
  },
  {
    path: ROUTES_PATHS.NOTFOUND,
    element: <NotFound />,
  },
  {
    path: ROUTES_PATHS.UI,
    element: <UIPage />,
  },
]);
