import ROUTES_PATHS from './routes-paths';
import { SolutionOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import { VacantsPage } from 'pages/hr/vacants';
import { UIPage } from 'pages/shared/ui';
import type { ReactNode } from 'react';

export interface IMenu {
  key: string;
  label: string;
  icon: ReactNode;
  element: ReactNode;
}

export const routesList: IMenu[] = [
  {
    key: ROUTES_PATHS.MAIN,
    label: 'Main page',
    icon: <SolutionOutlined />,
    element: <div>Main page</div>,
  },
  {
    key: ROUTES_PATHS.UI,
    label: 'UI components',
    icon: <VideoCameraOutlined />,
    element: <UIPage />,
  },
  {
    key: ROUTES_PATHS.VACANTS,
    label: 'Vacants',
    icon: <UserOutlined />,
    element: <VacantsPage />,
  },
];
