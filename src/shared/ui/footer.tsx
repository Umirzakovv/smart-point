import { Col, Flex, Row, Typography } from 'antd';
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
            <Col xs={24} md={12}>
              <Flex vertical gap={20} className="w-full ">
                <Flex align="center" gap={5}>
                  <img src="/images/main-logo.jpg" className="w-10! h-10!" />
                  <Text type="secondary" className="text-xl!">
                    Smart Point
                  </Text>
                </Flex>

                <Text type="secondary" className='w-full md:w-3/4'>
                  Your one-stop destination for premium electronics, gadgets and accessories.
                  Experience the future of technology today.
                </Text>

                <Flex gap={12} vertical>
                  <Text className='text-lg font-semibold'>Bog'lanish</Text>
                  <a href="tel:+998901234567" className='hover:text-[var(--color-primary)] transition-colors'>
                    <Text type="secondary" className='text-lg'>+998 90 123 45 67</Text>
                  </a>
                  <Flex gap={12} className='mt-2'>
                    <a href="#" className='hover:opacity-80 transition-opacity'>
                      <InstagramOutlined className="text-[var(--color-secondary)]! text-3xl" />
                    </a>
                    <a href="#" className='hover:opacity-80 transition-opacity'>
                      <SendOutlined className="text-[var(--color-secondary)]! text-3xl" />
                    </a>
                  </Flex>
                </Flex>
              </Flex>
            </Col>

            {/* footer nav  */}
            <Col xs={24} md={12}>
              <Flex gap={60} className='flex-col md:flex-row md:gap-40'>
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
