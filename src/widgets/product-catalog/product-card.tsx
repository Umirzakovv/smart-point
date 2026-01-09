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
    className='w-72'
    style={{borderRadius:'16px',position:'relative'}}
    cover={
        <img src={image} alt={title} className='h-48 object-contain' />
    }
    >
        <Flex vertical gap={30}>
            <Flex align='start' justify="space-between" style={{marginTop:'-20px'}}>
                <Flex vertical>
                    <Text style={{fontSize:'20px'}}>{title}</Text>
                    <Text style={{fontSize:'12px'}} type='secondary'>{shortDesc}</Text>
                </Flex>
                <span className='flex items-center gap-1 text-[16px]'><StarOutlined style={{color:'yellow'}}/>{rating}</span>
            </Flex>
            <Flex align="end" justify='space-between'>
                <Flex vertical>
                    <Text style={{fontSize:'12px'}} type='secondary' delete>${oldPrice}</Text>
                    <Text style={{fontSize:'20px'}}>${price}</Text>
                </Flex>
                <Button style={{backgroundColor:'var(--color-muted)'}}  icon={<ShoppingCartOutlined style={{color:'var(--color-primary)',fontSize:'22px'}}/>}/>
            </Flex>
            <Text
            style={{
                position: 'absolute',
                top: 14,
                left: 11,
                padding: '2px 8px',
                fontWeight:500,
                borderRadius: 10,
                backgroundColor: isNew ? '#fff' : 'var(--color-danger)',
                color: isNew ? 'var(--color-primary)' : 'var(--color-white)',
            }}
            >
            {isNew ? 'New' : 'Sale'}
            </Text>
        </Flex>
    </Card>
  );
};
