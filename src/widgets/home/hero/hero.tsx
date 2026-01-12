import { Button, Col, Flex, Row, Typography } from 'antd';
import { ArrowRightOutlined } from '@ant-design/icons';
import { Container } from '../../../shared/ui/container';

export const HERO_CONTENT = {
  release: 'NEW RELEASE',
  title: 'The Future of Sound. Silence the Noise.',
  description:
    'Experience the next level Tech Noise-Cancelling Series X1 with premium audio fidelity and 40h battery life.',
  image: '/images/hero.png',
};

export const Hero = () => {
  const {description,image,release,title} = HERO_CONTENT
  return (
    <section>
      <Container>
        <Row align="middle" className="bg-[var(--color-white)] rounded-3xl px-12">
          <Col span={12}>
            <Flex align="start" vertical gap={25}>
              <Typography.Text type='success' className="bg-[var(--color-muted)] text-[var(--color-primary)]! px-3 py-1 rounded-full">
                {release}
              </Typography.Text>

              <h1 className="text-6xl font-bold leading-tight">{title}</h1>
              <p className="text-base text-secondary max-w-lg">
                {description}
              </p>
              <Flex gap={16}>
                <Button
                  type="primary"                  
                  iconPlacement='end'
                  icon={<ArrowRightOutlined/>}
                  className='text-[var(--color-white)]! py-5 px-4'
                  >
                  Shop now
                </Button>

                <Button className='p-4'>Watch video</Button>
              </Flex>
            </Flex>
          </Col>
          <Col span={12} className="py-14">
            <img
              src={image}
              alt="Hero product preview"
              className="w-full h-auto object-contain"
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};
