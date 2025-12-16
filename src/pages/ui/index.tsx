import { Button, Divider, Flex, Tag } from 'antd';
import TabsUI from './tabs';

export const UIPage = () => {
  return (
    <div>
      <Divider />
      <Flex gap={8}>
        <Button type="primary">Primary</Button>
        <Button type="text">Text</Button>
        <Button color="default" variant="filled">
          Filled button
        </Button>
        {/* Danger */}
        <Button danger type="primary">
          Primary danger
        </Button>
        <Button danger type="text">
          Text danger
        </Button>
      </Flex>
      <Divider />
      <Flex gap={8}>
        <Tag color="green" variant="outlined">
          Green
        </Tag>
        <Tag color="red" variant="outlined">
          Red
        </Tag>
        <Tag color="yellow" variant="outlined">
          Yellow
        </Tag>
        <Tag color="blue" variant="outlined">
          Blue
        </Tag>
        <Tag color="default" variant="outlined">
          Default
        </Tag>
      </Flex>
      <Divider />
      <Flex gap={8}>
        <TabsUI />
      </Flex>
    </div>
  );
};
