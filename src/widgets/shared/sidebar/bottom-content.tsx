import { Avatar, Badge, Menu, Tooltip, Typography } from 'antd';
import { BellOutlined } from '@ant-design/icons';
import { Link, useLocation, useNavigate } from 'react-router';

export const BottomContent = ({ collapsed }: { collapsed: boolean }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const bottomLinks = [
    {
      key: '/notifications',
      icon: <BellOutlined />,
      label: 'Notifications',
    },
  ];

  return (
    <div>
      <Menu
        theme="light"
        mode="inline"
        selectedKeys={[location.pathname]}
        items={bottomLinks}
        onClick={({ key }) => navigate(key)}
      />
      <Link
        to="/profile"
        style={{
          display: 'flex',
          gap: 8,
          padding: 16,
          paddingInline: collapsed ? 16 : 24,
          transition: 'padding-inline 0.2s ease',
        }}>
        <Tooltip
          title="Profile"
          placement="right"
          style={{ display: collapsed ? 'block' : 'none' }}>
          <Badge dot status="default" color="blue" offset={[-2, 30]}>
            <Avatar shape="circle" size="large">
              UM
            </Avatar>
          </Badge>
        </Tooltip>
        {/* <Avatar /> */}
        <div style={{ display: collapsed ? 'none' : 'grid' }}>
          <Typography.Text ellipsis className="text-black">
            Umirzakov Muhammadyosin
          </Typography.Text>
          <p className="text-blue-500">Moderator</p>
        </div>
      </Link>
    </div>
  );
};
