import { Button, Flex, Typography } from 'antd';
import { CloseOutlined } from '@ant-design/icons';
// import { useDrawerActions } from 'app/providers/drawer/drawer-context';

interface Props {
  title: string;
  // drawerId: string;
}

export const DrawerHeader = ({ title }: Props) => {
  // const { closeDrawerById } = useDrawerActions();

  return (
    <Flex justify="space-between" align="center" className="mb-6!">
      <Typography.Title level={4} className="!mb-0">
        {title}
      </Typography.Title>

      <Button
        color="default"
        variant="filled"
        icon={<CloseOutlined />}
        style={{
          width: 43,
          height: 42,
        }}
        // onClick={() => closeDrawerById(drawerId)}
      />
    </Flex>
  );
};
