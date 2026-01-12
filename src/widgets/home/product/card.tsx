import { Card, Flex, Typography, Button } from 'antd';
import { ShoppingCartOutlined, StarOutlined } from '@ant-design/icons';
import type { Product } from './model/types';

interface Props {
  product: Product;
}
const { Text } = Typography;

export const ProductCard = ({ product }: Props) => {
  const { title,shortDesc,image, price, oldPrice, rating, isNew } = product;
    
  return (
    <Card 
    hoverable
    className='w-[300px] rounded-2xl! relative'
    cover={
        <img src={image} alt={title} className='w-full! h-48! object-contain!' />
    }
    >
        <Flex vertical gap={30}>
            <Flex align='start' justify="space-between" className='-mt-2!'>
                <Flex vertical>
                    <Text className='text-xl!'>{title}</Text>
                    <Text className='text-xs!' type='secondary'>{shortDesc}</Text>
                </Flex>
                <span className='flex items-center gap-1 text-[16px]'><StarOutlined className='text-[var(--color-warning)]!'/>{rating}</span>
            </Flex>
            <Flex align="end" justify='space-between'>
                <Flex vertical>
                    <Text className='text-xs!' type='secondary' delete>${oldPrice}</Text>
                    <Text className='text-xl!'>${price}</Text>
                </Flex>
                <Button className='bg-[var(--color-muted)]!' icon={<ShoppingCartOutlined className='text-[var(--color-primary)]! text-2xl!'/>}/>
            </Flex>
            <Text
            className={`absolute top-3 left-3 py-1 px-2 font-medium rounded-xl ${isNew ? 'bg-[var(--color-white)]' : 'bg-[var(--color-danger)]'} ${isNew ? 'text-[var(--color-primary)]!' : 'text-[var(--color-white)]!'}`}
            >
            {isNew ? 'New' : 'Sale'}
            </Text>
        </Flex>
    </Card>
  );
};
