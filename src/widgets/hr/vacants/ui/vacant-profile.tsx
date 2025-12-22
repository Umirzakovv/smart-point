import { Flex, Tag, Typography } from 'antd';
import { DrawerHeader } from 'shared/ui/drawer-header';
import { LoadingOutlined } from '@ant-design/icons';
import { ProfileTabs } from './profile-tabs';

interface Props {
  vacantId: string;
}

export const VacantProfile = ({ vacantId }: Props) => {
  console.log(vacantId, 'vacantId');

  return (
    <div>
      <DrawerHeader title="Vacant profile" drawerId="vacant-profile" />

      {/* Header */}
      <Flex align="center" gap={16}>
        <img src="/images/user.png" alt="user logo" />
        <div>
          <Typography.Text className="mb-2 block">Sitora Anvarovna</Typography.Text>
          <Tag color="yellow" variant="outlined" icon={<LoadingOutlined />}>
            Interviewing
          </Tag>
        </div>
      </Flex>

      {/* Tabs */}
      <ProfileTabs />
    </div>
  );
};
