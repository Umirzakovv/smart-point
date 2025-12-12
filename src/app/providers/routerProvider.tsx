import { RouterProvider } from 'react-router';
import { routes } from 'shared/lib';

export const RouterProviderWrapper = () => {
  return <RouterProvider router={routes} />;
};
