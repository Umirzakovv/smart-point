import { Col, Row, Typography, Button, Form, Flex } from 'antd';
import { useParams } from 'react-router';
import { StarFilled } from '@ant-design/icons';
import { products } from 'widgets/product-catalog/model/data';
import { Container } from 'shared/ui/Container';
import { DetailImages } from './detail-images';
import { useEffect, useState } from 'react';
import type { ProductColorProps } from 'widgets/product-catalog/model/types';
import { NotFound } from 'pages/not-found/not-found';
import { DetailHighlights } from './detail-highlights';

const { Text } = Typography;

export const DetailDescription = () => {
  const { id } = useParams<{ id: string }>();
  const product = products.find((el) => el.id === Number(id));

  const [selectedColor, setSelectedColor] = useState<ProductColorProps | null>(
    product?.colors?.[0] || null,
  );
  console.log(selectedColor);
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  if (!product) return <NotFound/>
  return (
    <div className="mt-12">
      <Container>
        <Row className="mt-12" gutter={120}>
          {/* LEFT: IMAGES */}
          <Col span={12}>
            <DetailImages
              productImage={product.image}
              colors={product.colors}
              selectedColor={selectedColor}
              onSelectColor={setSelectedColor}
            />
          </Col>

          <Col span={12}>
            <Flex vertical gap={25}>
              <Text style={{ fontSize: '42px', fontWeight: 700 }}>{product.title}</Text>

              <Flex>
                {[1, 2, 3, 4, 5].map((star) => (
                  <StarFilled
                    key={star}
                    style={{
                      fontSize: 20,
                      color:
                        star <= product.rating ? 'var(--color-warning)' : 'var(--color-secondary)',
                    }}
                  />
                ))}
                <Text style={{ marginLeft: 8 }}>{product.rating}</Text>
              </Flex>

              <Flex align="center" gap={17}>
                <Text style={{ fontSize: '32px' }}>${product.price}</Text>
                <Text style={{ fontSize: '20px' }} type="secondary">
                  ${product.oldPrice}
                </Text>
                <Text
                  style={{
                    backgroundColor: 'var(--color-success)',
                    padding: '3px 8px',
                    borderRadius: '18px',
                  }}
                  type="success">
                  Save ${product.oldPrice - product.price}
                </Text>
              </Flex>

              <Text style={{ fontSize: '20px' }} type="secondary">
                {product.description}
              </Text>

              <Text type="secondary">Color: {selectedColor?.value}</Text>

              <Flex gap={20}>
                {
                  product.colors?.map((el) => (
                    <Button
                      style={{
                        backgroundColor: el.hex,
                        width: '40px',
                        height: '40px',
                        padding: 0,
                        borderRadius:'50%'
                      }}  
                      onClick={() => setSelectedColor(el)}
                    >

                    </Button>
                  ))
                }
              </Flex>
              <Form>
                <Form.Item>
                  <Button
                    style={{width: '100%', padding: '18px 0', borderRadius: '22px', color: 'var(--color-white)', }}
                    type="primary">
                    Add to Bag
                  </Button>
                </Form.Item>
              </Form>
              <DetailHighlights colors={product.colors}/>
            </Flex>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
