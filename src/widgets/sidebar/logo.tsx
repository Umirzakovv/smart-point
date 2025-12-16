import { Typography } from 'antd';
import { Link } from 'react-router';

export const Logo = ({ collapsed }: { collapsed: boolean }) => {
  return (
    <Link
      to="/"
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 12,
        paddingInline: 20,
        paddingBlock: 20,
        width: 'max-content',
      }}>
      <img src="/logo.svg" alt="logo" />
      <Typography.Title
        level={5}
        style={{ marginBottom: 0, visibility: collapsed ? 'hidden' : 'visible' }}>
        WFM
      </Typography.Title>
    </Link>
  );
};
