import { Container } from 'shared/ui/container';
import { Header } from 'shared/ui/header';
import { Button, Col, Flex, Form, Image, Input, Row, Space, Typography } from 'antd';
import {
  ArrowLeftOutlined,
  ArrowRightOutlined,
  CarOutlined,
  DeleteOutlined,
  UnlockOutlined,
} from '@ant-design/icons';
import { useState } from 'react';

const { Text } = Typography;
export const Basket = () => {
  const [initial, setInitial] = useState(0);
  return (
    <>
      <Container>
        <Header />
        <Flex vertical className="mt-10!">
          <Text className="font-bold! text-3xl!">Your Bag</Text>
          <Text type="secondary" className="text-[18px]!">
            3 items for 1.447.00$
          </Text>
        </Flex>

        <Row justify="space-between" className=" w-full! mt-20">
          <Col span={15} className="h-52!">
            <Flex className="bg-[var(--color-white)] p-6! rounded-xl! relative! border-1! border-[var(--color-secondary)]! gap-1">
              <Image
                src="/images/Iphone 14 pro 1.png"
                className="w-36! h-36! object-contain! rounded-3xl!"
              />
              <Flex align="start" justify="space-between" className="w-full!">
                <Flex vertical align="start">
                  <Text className="text-2xl! font-bold!">Smartphone Pro Max</Text>
                  <Text type="secondary" className="text-[18px]!">
                    256GB- Midnight Green
                  </Text>
                  <Text className="success">In Stock</Text>
                </Flex>
                <Text className="text-2xl! font-bold!">$1,099.00</Text>
              </Flex>

              <Flex className="w-full! items-center! justify-between! absolute! bottom-5!">
                <Text className="text-[var(--color-danger)]! cursor-pointer! font-bold!">
                  <DeleteOutlined className="text-[var(--color-danger)]! ml-32 font-bold!" />
                  Delete
                </Text>
                <Space className="mr-11! bg-[var(--color-muted)]! rounded-3xl!">
                  <Button
                    disabled={initial === 0}
                    className="border-none! shadow-none! bg-transparent! text-[var(--color-secondary)]! text-2xl!"
                    onClick={() => setInitial((v) => v - 1)}>
                    -
                  </Button>
                  <Text>{initial}</Text>
                  <Button
                    className="border-none! shadow-none! bg-transparent! text-[var(--color-secondary)]! text-2xl!"
                    onClick={() => setInitial((v) => v + 1)}>
                    +
                  </Button>
                </Space>
              </Flex>
            </Flex>
          </Col>
          <Col
            span={8}
            className="border border-[var(--color-secondary)]! bg-[var(--color-white)] p-8 rounded-[28px]!">
            <Flex vertical gap={30}>
              <Text className="text-3xl! font-bold">Oreder Summary</Text>
              <Flex className="w-full! items-center! justify-between!">
                <Text type="secondary" className="text-xl!">
                  Subtotal
                </Text>
                <Text className="text-2xl! font-bold!">$1,477.00</Text>
              </Flex>
              <Flex className="w-full! justify-between!">
                <Text type="secondary" className="text-xl!">
                  Shipping
                </Text>
                <Text type="success" className="font-bold text-xl!">
                  Free
                </Text>
              </Flex>
              <Flex className="w-full! justify-between!">
                <Text type="secondary" className="text-xl!">
                  Estimated Tax
                </Text>
                <Text className="font-bold text-2xl!">$118.16</Text>
              </Flex>

              <hr />

              <Text type="secondary">PROMO CODE</Text>
              <Form>
                <Form.Item>
                  <Flex gap={8}>
                    <Input
                      required
                      placeholder="Promo code"
                      className="bg-[var(--color-muted)]!  rounded-4xl!"
                    />
                    <Button className="bg-[var(--color-muted)]! text-[var(--color-primary)]! rounded-4xl!">
                      Apply
                    </Button>
                  </Flex>
                </Form.Item>
              </Form>
              <hr />

              <Flex className="flex! items-center! justify-between!">
                <Text className="text-2xl! font-bold!">Total</Text>
                <Text className="text-3xl! font-bold!">$1,595.16</Text>
              </Flex>

              <Button
                icon={<ArrowRightOutlined />}
                type="primary"
                className="text-[var(--color-white)]! rounded-4xl! w-4/5! mx-auto">
                Proceed to checkout
              </Button>

              <Flex align="center" justify="center">
                <ArrowLeftOutlined />
                <Text type="secondary">Continue Shopping</Text>
              </Flex>

              <Flex align="center" justify="center" gap={50}>
                <Text type="secondary">
                  <UnlockOutlined />
                  Secure
                </Text>
                <Text type="secondary">
                  <CarOutlined />
                  Fast delivery
                </Text>
              </Flex>
            </Flex>
          </Col>
        </Row>
      </Container>
    </>
  );
};
