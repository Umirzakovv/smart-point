import { Collapse, Radio } from 'antd';
import { useState } from 'react';
import { DownOutlined } from '@ant-design/icons';

export const BrandsFilter = () => {
  const [active, setActive] = useState<string[]>();

  return (
    <div onMouseEnter={() => setActive(['1'])} onMouseLeave={() => setActive([])}>
      <Collapse
        activeKey={active}
        expandIcon={({ isActive }) => <DownOutlined rotate={isActive ? 180 : 0} />}
        expandIconPlacement='end'
        className='py-2!'
        items={[
          {
            key: '1',
            label: 'Brand Filters',
            children: (
              <Radio.Group className='flex! flex-col gap-3.5' >
                <Radio className='w-full' value="phone">Smartphone</Radio>
                <Radio className='w-full' value="laptop">Laptops & PC</Radio>
                <Radio className='w-full' value="wearable">Wearables</Radio>
              </Radio.Group>
            ),
          },
        ]}
      />
    </div>
  );
};
