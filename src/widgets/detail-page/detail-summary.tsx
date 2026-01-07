import { Col, Flex, Row, Typography, Button } from 'antd';
import { useParams } from 'react-router';
import { StarFilled } from '@ant-design/icons';
import { products } from 'widgets/product-catalog/model/data';
import { Container } from 'shared/ui/Container';
import { useState } from 'react';
import { DetailLoaction } from './detail-loaction';
import { DetailImages } from './detail-images';
const { Text } = Typography;

export const ProductSummary = () => {
  const { id } = useParams<{ id: string }>();
  const product = products.find((el) => el.id === Number(id));

  const [selectedColor, setSelectedColor] = useState(product?.colors ? product.colors[0] : null);

  if (!product) return <Text>Product not found</Text>;

  return (
    <section className="mt-12">
      <Container>
        <DetailLoaction />
        <Row className="mt-12" gutter={60}>
          <Col span={12}>
            <DetailImages colors={product.colors} selectedColor={selectedColor} onSelectColor={setSelectedColor}/>
          </Col>

          <Col span={12}>
            <Flex vertical gap={23}>
             <Flex vertical>
               {/* title */}
               <Text style={{ fontSize: '42px', fontWeight: 700 }}>{product.title}</Text>
              {/* raiting  */}
              <Flex align="center" gap={5}>
                <StarFilled style={{ color: 'yellow' }} />
                <Text>{product.rating}</Text>
              </Flex>
             </Flex>
              {/* price and old price */}
              <Flex gap={17} align='center'>
                <Text style={{fontSize:'32px'}}>
                  ${product.price}
                </Text>
                <Text type='secondary'style={{fontSize:'20px'}}>
                  ${product.oldPrice}
                </Text>
              </Flex>
              {/* description */}
              <Text type='secondary' style={{fontSize:'20px'}}>
                {product.description}
              </Text>

              <Flex vertical gap={10}>
                <Flex align="center" gap={15}>
                  <Text style={{fontSize:'20px'}}>Color:</Text>
                  <Text type='secondary'>{selectedColor?.value.toLocaleUpperCase()}</Text>
                </Flex>
                <Flex gap={20} className="mt-5">
                  {product.colors?.map((color) => (
                    <Button
                      key={color.value}
                      style={{ backgroundColor: color.hex, borderRadius:'100%',width:'40px',height:'40px',padding:'0'}}
                      onClick={() => setSelectedColor(color)}
                    />
                  ))}
                </Flex>
              </Flex>
              <Button type='primary'style={{marginTop:'30px',color:'var(--color-white)',padding:'22px 0',borderRadius:'30px'}}>Add to bag</Button>
            </Flex>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
