import ROUTES_PATHS from './routes-paths';
import { SolutionOutlined, VideoCameraOutlined } from '@ant-design/icons';
import { ExamplePage } from 'pages/example';
import { UIPage } from 'pages/ui';
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
    key: ROUTES_PATHS.EXAMPLE,
    label: 'Grid Example',
    icon: <VideoCameraOutlined />,
    element: <ExamplePage />,
  },
];
