import { Tabs, type TabsProps } from 'antd';
import { ProfileDetailsTab } from './profile-details-tab';

const items: TabsProps['items'] = [
  { key: '1', label: 'Tab 1', children: <ProfileDetailsTab /> },
  { key: '2', label: 'Tab 2', children: 'Content of Tab Pane 2' },
  { key: '3', label: 'Tab 3', children: 'Content of Tab Pane 3' },
];

export const ProfileTabs = () => {
  return <Tabs defaultActiveKey="1" items={items} />;
};
