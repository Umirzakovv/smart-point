import { Col, Row, Typography, Button, Flex, Breadcrumb, Image } from 'antd';
import { Link, useParams } from 'react-router';
import { Container } from 'shared/ui/container';
import { products } from 'widgets/home/product/model/data';
import { PoweroffOutlined, StarFilled } from '@ant-design/icons';
import { useEffect, useState } from 'react';
import { BookModal } from 'shared/ui/book-modal';

const { Text } = Typography;
const star = [1, 2, 3, 4, 5];
export const Informations = () => {
  const { id } = useParams<{ id: string }>();
  const product = products.find((el) => el.id === Number(id));
  const [handleOpen, setHandleOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);



  return (
    <Container >
      <Breadcrumb
        separator=">"
        items={[{ title: <Link to="/">Home</Link> }, { title: `${product?.title}` }]}
      />
      <Row className="mt-14" justify="space-between" >
        <Col span={11}>
          <Flex className='w-full! flex! items-center! justify-center! bg-[var(--color-white)]! rounded-3xl! border border-[var(--color-primary)]!'>
            <Image src={product?.image} width={670} height={590} preview={false}  className="object-contain" />
          </Flex>
        </Col>
        <Col span={11}>
          <Flex vertical gap={25}>
            <Text className="text-[42px]! font-medium">{product?.title}</Text>

            {
              product?.rating && (
                <Flex align="center" gap={7}>
                  {star.map((star) => (
                    <StarFilled key={star} className="text-[var(--color-warning)]!" />
                  ))}
                  <Text className="text-[var(--color-warning)]!">{product?.rating}</Text>
              </Flex>
              )
            }

            <Flex align="center" gap={17}>
              {product?.discountPrice && (
                <Text className="text-[32px]!"> ${product?.discountPrice} </Text>
              )}
              <Text
                className={`${product?.discountPrice ? 'text-xl!' : 'text-[32px]! text-[var(--color-black)]!'}`}
                type="secondary"
                delete={product?.discountPrice !== undefined}>
                {' '}
                ${product?.originalPrice}{' '}
              </Text>
              {product?.discountPrice && (
                <Text className="success font-semibold">
                  {' '}
                  Save ${product?.originalPrice - product?.discountPrice}{' '}
                </Text>
              )}
            </Flex>
            <Text className="text-xl! font-medium!" type="secondary">
              {product?.description}
            </Text>
            <Button
              onClick={() => setHandleOpen(true)}
              type="primary"
              className="rounded-3xl! text-[var(--color-white)]!">
              Sotib olish
            </Button>
            <BookModal
              isOpen={handleOpen}
              handleCancel={() => setHandleOpen(false)}
              productTitle={product?.title}
              productPrice={product?.originalPrice}
              image={product?.image}
            />

            <Flex
              vertical
              gap={17}
              className="mt-12! bg-[var(--color-white)] px-5! py-5! rounded-xl!">
              <Text className="font-semibold">Highlights</Text>
              <Text type="secondary">
                {' '}
                <PoweroffOutlined className="text-[var(--color-primary)]! text-[16px]!" /> 36 hours
                bataries
              </Text>
              <Text type="secondary">
                {' '}
                <PoweroffOutlined className="text-[var(--color-primary)]! text-[16px]!" /> 25 hours
                bataries
              </Text>
              <Text type="secondary">
                {' '}
                <PoweroffOutlined className="text-[var(--color-primary)]! text-[16px]!" /> 21 hours
                bataries
              </Text>
            </Flex>
          </Flex>
        </Col>
      </Row>
    </Container>
  );
};
