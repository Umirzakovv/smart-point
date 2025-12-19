import { Flex, Menu, type MenuProps } from 'antd';
import Sider from 'antd/es/layout/Sider';
import { useLocation, useNavigate } from 'react-router';
import { TopContent } from './top-content';
import { BottomContent } from './bottom-content';
import { useState } from 'react';
import { routesList } from 'shared/consts/routes-list';

type MenuItem = Required<MenuProps>['items'][number];

interface Props {
  collapsed: boolean;
  setCollapsed: (collapsed: boolean) => void;
}

export const Sidebar = ({ collapsed, setCollapsed }: Props) => {
  const navigate = useNavigate();
  const location = useLocation();

  const [isPinned, setIsPinned] = useState<boolean>(false);

  return (
    <Sider
      trigger={null}
      collapsible
      collapsed={collapsed}
      theme="light"
      width={280}
      collapsedWidth={80}
      className="transition-all duration-200"
      onMouseEnter={() => {
        !isPinned && setCollapsed(false);
      }}
      onMouseLeave={() => !isPinned && setCollapsed(true)}>
      <Flex className="h-full flex-col">
        <TopContent collapsed={collapsed} isPinned={isPinned} setIsPinned={setIsPinned} />

        <Menu
          theme="light"
          mode="inline"
          selectedKeys={[location.pathname]}
          items={routesList as unknown as MenuItem[]}
          onClick={({ key }) => navigate(key)}
          className="flex-1"
        />

        <BottomContent collapsed={collapsed} />
      </Flex>
    </Sider>
  );
};
