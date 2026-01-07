import { Collapse, Radio } from 'antd';
import { useState } from 'react';
import { DownOutlined } from '@ant-design/icons';

export const CategoryFilter = () => {
  const [active, setActive] = useState<string[]>();

  return (
    <div onMouseEnter={() => setActive(['1'])} onMouseLeave={() => setActive([])}>
      <Collapse
        activeKey={active}
        expandIcon={({ isActive }) => <DownOutlined rotate={isActive ? 180 : 0} />}
        expandIconPlacement='end'
        style={{padding:'10px 0'}}
        items={[
          {
            key: '1',
            label: 'Categories',
            children: (
              <Radio.Group style={{display:'flex',flexDirection:'column',gap:'15px'}}>
                <Radio value="phone">Smartphone</Radio>
                <Radio value="laptop">Laptops & PC</Radio>
                <Radio value="wearable">Wearables</Radio>
              </Radio.Group>
            ),
          },
        ]}
      />
    </div>
  );
};
