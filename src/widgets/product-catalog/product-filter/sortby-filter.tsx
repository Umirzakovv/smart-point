import { Form, Select, Space } from 'antd';

export const SortByFilter = () => {
  return (
    <Form>
      <Space wrap>
        <Select
          defaultValue="Most Popular"
          style={{ width: '190px', color: 'var(--color-secondary)' }}
          options={[
            { value: 'Most Popular', label: 'Most Popular' },
            { value: 'lucy', label: 'Lucy' },
            { value: 'Yiminghe', label: 'yiminghe' },
          ]}
        />
      </Space>
    </Form>
  );
};
