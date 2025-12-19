import MainLayout from 'pages/layout';
import { SharedAuthPage } from 'pages/shared/auth';
import { createBrowserRouter } from 'react-router';
import { routesList, type IMenu } from 'shared/consts/routes-list';
import ROUTES_PATHS from 'shared/consts/routes-paths';

export const routes = createBrowserRouter([
  {
    element: <MainLayout />,
    children: routesList.map((route: IMenu) => ({
      path: route.key,
      element: route.element,
    })),
  },
  {
    path: ROUTES_PATHS.AUTH,
    element: <SharedAuthPage />,
  },
]);
