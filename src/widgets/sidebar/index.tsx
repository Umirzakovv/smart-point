import { Flex, Menu } from 'antd';
import Sider from 'antd/es/layout/Sider';
import { SolutionOutlined, VideoCameraOutlined } from '@ant-design/icons';
import { useLocation, useNavigate } from 'react-router';
import { Logo } from './logo';
import { BottomContent } from './bottom-content';

const mainLinks = [
  {
    key: '/',
    icon: <SolutionOutlined />,
    label: 'Main page',
  },
  {
    key: '/ui',
    icon: <VideoCameraOutlined />,
    label: 'UI components',
  },
];

export const Sidebar = ({ collapsed }: { collapsed: boolean }) => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <Sider
      trigger={null}
      collapsible
      collapsed={collapsed}
      theme="light"
      width={280}
      className="h-screen">
      <Flex className="h-full flex-col">
        <Logo collapsed={collapsed} />

        {/* TOP MENU */}
        <Menu
          theme="light"
          mode="inline"
          selectedKeys={[location.pathname]}
          items={mainLinks}
          onClick={({ key }) => navigate(key)}
          className="flex-1"
        />

        <BottomContent collapsed={collapsed} />
      </Flex>
    </Sider>
  );
};
