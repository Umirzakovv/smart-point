import { Button, Flex, Typography } from 'antd';
import { Link } from 'react-router';
import { PushpinOutlined } from '@ant-design/icons';

interface Props {
  collapsed: boolean;
  isPinned: boolean;
  setIsPinned: (isPinned: boolean) => void;
}

export const TopContent = ({ collapsed, isPinned, setIsPinned }: Props) => {
  return (
    <Flex
      justify="space-between"
      align="center"
      gap={8}
      style={{ paddingInline: 20, paddingBlock: 20 }}>
      <Link
        to="/"
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 8,
        }}>
        <img src="/logo.svg" alt="logo" />
        <Typography.Title
          level={5}
          style={{ marginBottom: 0, visibility: collapsed ? 'hidden' : 'visible' }}>
          WFM
        </Typography.Title>
      </Link>
      {!collapsed ? (
        <>
          {isPinned ? (
            <Button
              color="default"
              variant="filled"
              icon={<PushpinOutlined />}
              onClick={() => setIsPinned(!isPinned)}
              style={{
                width: 43,
                height: 42,
              }}
            />
          ) : (
            <Button
              type="text"
              icon={<PushpinOutlined />}
              onClick={() => setIsPinned(!isPinned)}
              style={{
                width: 43,
                height: 42,
              }}
            />
          )}
        </>
      ) : null}
    </Flex>
  );
};
