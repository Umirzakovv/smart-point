import { Col, Row, Typography, Button, Flex, Breadcrumb } from 'antd';
import { Link, useParams } from 'react-router';
import { Container } from 'shared/ui/container';
import { products } from 'widgets/home/product-catalog/model/data';
import { PoweroffOutlined, StarFilled } from '@ant-design/icons';
import { useEffect, useState } from 'react';
import type { ProductColorProps } from 'widgets/home/product-catalog/model/types';
import { Images} from './images';

const { Text } = Typography;
const star = [1, 2, 3, 4, 5];
export const Informations = () => {
    const { id } = useParams<{ id: string }>();
    const product = products.find((el) => el.id === Number(id));
    const [selectedColor, setSelectedColor] = useState<ProductColorProps | null>(
        product?.colors?.[0] || null,
    )
    useEffect(() =>{
        window.scrollTo(0,0)
    },[])
  return (
    <Container>
      <Breadcrumb
        separator=">"
        items={[{ title: <Link to="/">Home</Link> }, { title: `${product?.title}` }]}
      />
      <Row className='mt-14' gutter={120}>
        <Col span={12}>
            <Images selectedColor={selectedColor}/>
        </Col>
        <Col span={12}>
            <Flex vertical gap={25}>
                
                <Text className="text-[42px]! font-medium">{product?.title}</Text>

                <Flex align="center" gap={7}>
                    {star.map((star) => (
                    <StarFilled key={star} className='text-[var(--color-warning)]!'/>
                    ))}
                    <Text className='text-[var(--color-warning)]!'>{product?.rating}</Text>
                </Flex>

                <Flex align="center" gap={17}>
                    <Text className='text-[32px]!'> ${product?.price} </Text>
                    <Text className='text-xl!' type="secondary" delete> ${product?.oldPrice} </Text>
                    <Text className="success font-semibold"> Save ${product?.oldPrice - product?.price} </Text>
                </Flex>

                <Text className='text-xl! font-medium!' type='secondary'>{product?.description}</Text>

                <Flex gap={20}>
                    {product?.colors?.map((color) => (
                        <Button 
                        key={color.value}
                        style={{backgroundColor:color.hex }}
                        className={`w-10! h-10! rounded-full! p-0! ${selectedColor?.hex === color.hex ? 'border-3! border-[var(--color-primary)]!' : 'border-3! border-[var(--color-white)]!'}`}
                        onClick={() => setSelectedColor(color)}
                        />
                    ))}
                </Flex>     

                <Button type='primary' className='w-full text-[var(--color-white)]! py-6! rounded-3xl! !'>Add to bag</Button>
                <Flex vertical gap={17} className='mt-14! bg-[var(--color-white)] px-5! py-5! rounded-xl!'>
                    <Text className='font-semibold'>Highlights</Text>
                    <Text type='secondary'> <PoweroffOutlined className='text-[var(--color-primary)]! text-[16px]!' /> 36 hours bataries</Text>
                    <Text type='secondary'> <PoweroffOutlined className='text-[var(--color-primary)]! text-[16px]!' /> 25 hours bataries</Text>
                    <Text type='secondary'> <PoweroffOutlined className='text-[var(--color-primary)]! text-[16px]!' /> 21 hours bataries</Text>
                </Flex>
            </Flex>
        </Col>
      </Row>
    </Container>
  );
};
