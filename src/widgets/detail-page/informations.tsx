import { Col, Row, Typography, Button, Flex, Breadcrumb, Image } from 'antd';
import { Link, useParams } from 'react-router';
import { Container } from 'shared/ui/container';
import { products } from 'widgets/home/product/model/data';
import { PoweroffOutlined, StarFilled } from '@ant-design/icons';
import { useEffect, useState } from 'react';
import { BookModal } from 'shared/ui/book-modal';
import type { Hightlight } from 'widgets/home/product/model/types';

const { Text } = Typography;
const star = [1, 2, 3, 4, 5];
export const Informations = () => {
  const { id } = useParams<{ id: string }>();
  const product = products.find((el) => el.id === Number(id));
  const { highlights } = product || {};

  const [handleOpen, setHandleOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Container>
      <Breadcrumb
        separator=">"
        items={[{ title: <Link to="/#products">Home</Link> }, { title: `${product?.title}` }]}
      />
      <Row className="mt-8 md:mt-14" justify="space-between" gutter={[0, 24]}>
        <Col xs={24} md={11}>
          <Flex className="w-full! flex! items-center! justify-center! bg-[var(--color-white)]! rounded-3xl! border border-[var(--color-primary)]! p-4">
            <Image
              src={product?.image}
              width={'100%'}
              preview={false}
              className="object-contain max-h-[400px] md:max-h-[590px]"
            />
          </Flex>
        </Col>
        <Col xs={24} md={11}>
          <Flex vertical gap={20} className="md:gap-25">
            <Text className="text-[28px] md:text-[42px]! font-medium leading-tight">
              {product?.title}
            </Text>

            {product?.rating && (
              <Flex align="center" gap={7}>
                {star.map((star) => (
                  <StarFilled key={star} className="text-[var(--color-warning)]!" />
                ))}
                <Text className="text-[var(--color-warning)]!">{product?.rating}</Text>
              </Flex>
            )}

            <Flex align="center" gap={17} wrap="wrap">
              {product?.discountPrice && (
                <Text className="text-[24px] md:text-[32px]!"> ${product?.discountPrice} </Text>
              )}
              <Text
                className={`${product?.discountPrice ? 'text-lg md:text-xl!' : 'text-[24px] md:text-[32px]! text-[var(--color-black)]!'}`}
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
            <Text className="text-lg md:text-xl! font-medium!" type="secondary">
              {product?.description}
            </Text>
            <Button
              onClick={() => setHandleOpen(true)}
              type="primary"
              size="large"
              className="rounded-3xl! text-[var(--color-white)]! w-full md:w-auto h-12!">
              Sotib olish
            </Button>
            <BookModal
              isOpen={handleOpen}
              handleCancel={() => setHandleOpen(false)}
              productTitle={product?.title || ''}
              productPrice={product?.originalPrice || 0}
              image={product?.image || ''}
            />

            {/* HIGHLIGHTS */}
            <Flex
              vertical
              gap={17}
              className="mt-6 md:mt-12! bg-[var(--color-white)] px-5! py-5! rounded-xl!">
              <Text className="font-semibold">Highlights</Text>
              {highlights?.map((highlight: Hightlight) => (
                <Text key={highlight.title} type="secondary">
                  <PoweroffOutlined className="text-[var(--color-primary)]! text-[16px]!" />{' '}
                  {highlight.value}
                </Text>
              ))}
            </Flex>
          </Flex>
        </Col>
      </Row>
    </Container>
  );
};
