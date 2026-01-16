import { Col, Flex, Image, Row, Typography } from 'antd';
import { Container } from 'shared/ui/container';
import { InstagramOutlined, SendOutlined } from '@ant-design/icons';
import { FooterDataNav } from './footer-nav';
import { Link } from 'react-router';

const { Text } = Typography;
export const Footer = () => {
  return (
    <>
      <footer className="bg-[var(--color-white)] pt-20 mt-36 flex flex-col gap-16">
        <Container>
          <Row gutter={[32, 32]}>

            {/* Footer logo  */}
            <Col span={12}>
              <Flex vertical gap={20} className="w-full ">
                <Flex align="center" gap={5}>
                  <Image src="/images/main-logo.jpg" className="w-10! h-10!" />
                  <Text type="secondary" className="text-xl!">
                    Smart Point
                  </Text>
                </Flex>

                <Text type="secondary" className='w-3/4'>
                  Your one-stop destination for premium electronics, gadgets and accessories.
                  Experience the future of technology today.
                </Text>

                <Flex gap={12}>
                  <a href="#">
                    <InstagramOutlined className="text-[var(--color-secondary)]! text-3xl" />
                  </a>
                  <a href="#">
                    <SendOutlined className="text-[var(--color-secondary)]! text-3xl" />
                  </a>
                </Flex>
              </Flex>
            </Col>

            {/* footer nav  */}
            <Col span={12}>
              <Flex gap={160}>
                {FooterDataNav.map((item) => (
                  <Flex vertical key={item.title} gap={20}>
                    <b className="text-xl">{item.title}</b>
                    <ul>
                      {item.links.map((link) => (
                        <li className="pb-4" key={link.label}>
                          <Link to={link.href}>
                            <Text type="secondary" className="text-xl whitespace-nowrap!">
                              {link.label}
                            </Text>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </Flex>
                ))}
              </Flex>
            </Col>
          </Row>

        </Container>
        <Flex align="center" justify="center">
          <Text type="secondary">© 2025 • All Rights Reserved</Text>
        </Flex>
      </footer>
    </>
  );
};
