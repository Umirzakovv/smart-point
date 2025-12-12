import { Button, Flex } from 'antd';

export const UIPage = () => {
  return (
    <div>
      <Flex>
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
    </div>
  );
};
