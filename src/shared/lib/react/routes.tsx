import MainLayout from 'pages/layout';
import { createBrowserRouter } from 'react-router';
import { routesList, type IMenu } from 'shared/consts/routes-list';

export const routes = createBrowserRouter([
  {
    element: <MainLayout />,
    children: routesList.map((route: IMenu) => ({
      path: route.key,
      element: route.element,
    })),
  },
]);
