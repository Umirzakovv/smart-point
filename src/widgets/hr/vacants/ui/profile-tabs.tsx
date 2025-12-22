import { Tabs, type TabsProps } from 'antd';
import { ProfileDetailsTab } from './profile-details-tab';
import { ResultsTab } from './results-tab';

const items: TabsProps['items'] = [
  { key: '1', label: 'Details', children: <ProfileDetailsTab /> },
  { key: '2', label: 'Results', children: <ResultsTab /> },
];

export const ProfileTabs = () => {
  return <Tabs defaultActiveKey="1" items={items} />;
};
