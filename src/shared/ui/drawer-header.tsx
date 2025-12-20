import { Button, Flex, Typography } from 'antd';
import { CloseOutlined } from '@ant-design/icons';
import { useDrawer } from 'app/providers/drawer/drawer-context';

interface Props {
  title: string;
}

export const DrawerHeader = ({ title }: Props) => {
  const { closeDrawerById } = useDrawer();
  return (
    <Flex justify="space-between">
      <Typography.Title level={4}>{title}</Typography.Title>
      <Button
        icon={<CloseOutlined />}
        onClick={() => {
          closeDrawerById('vacant-profile');
          console.log('closed');
        }}
      />
    </Flex>
  );
};
