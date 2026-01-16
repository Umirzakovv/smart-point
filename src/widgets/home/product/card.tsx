import { Card, Flex, Typography, Button } from 'antd';
import { ShoppingCartOutlined, StarOutlined } from '@ant-design/icons';
import type { Product } from './model/types';

interface Props {
  product: Product;
}
const { Text } = Typography;

export const ProductCard = ({ product }: Props) => {
  const { title,shortDesc,image, discountPrice, originalPrice,rating, } = product;
    
  return (
    <Card 
    hoverable
    className='w-[300px] h-[395px]! rounded-2xl! relative'
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
                {product.rating && (<Text className='flex items-center gap-1 text-[16px]'><StarOutlined className='text-[var(--color-warning)]!'/>{rating}</Text>)}
            </Flex>
            <Flex className='absolute bottom-3 w-[85%]! flex! items-center! justify-between!'>
                <Flex vertical>
                    {product.discountPrice && (<Text className='text-xs!' type='secondary' delete>${originalPrice}</Text>)}
                    {product.discountPrice ? (<Text className='text-xl!'>${discountPrice}</Text>) : <Text className='text-xl!'>${originalPrice}</Text>}
                </Flex>
                <Button className='bg-[var(--color-muted)]! w-9! h-9!'>
                    <ShoppingCartOutlined className='text-[var(--color-primary)]! text-2xl!'/>
                </Button>
            </Flex>
            {
                product.discountPrice ? (
                    <Text
                        className={`absolute top-3 left-3 py-1 px-2 font-medium rounded-xl bg-[var(--color-danger)]! text-[var(--color-white)]!`}>
                        Sale
                    </Text>
                ) : ''
            }
        </Flex>
    </Card>
  );
};
