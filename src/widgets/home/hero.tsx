import { Button, Col, Flex, Row } from 'antd';
import { Container } from '../../shared/ui/container';
import { useState } from 'react';
import { BookModal } from '../../shared/ui/book-modal';

export const HERO_CONTENT = {
  title: 'Smart Shaving. Effortless Performance.',
  productName: 'Xiaomi Electric Shaver S301',
  description:
    'Xiaomi Electric Shaver S301 features ceramic blades, 360° floating heads, and smart speed control for a smooth, powerful shave.',
  image: '/images/shaver.png',
  price: 33,
};

export const Hero = () => {
  const { description, image, title, price, productName } = HERO_CONTENT
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <section>
      <Container>
        <Row align="middle" className="bg-[var(--color-white)] rounded-3xl px-6 md:px-12 py-8 md:py-0">
          <Col xs={24} md={12}>
            <Flex align="start" vertical gap={25}>

              <h1 className="text-4xl md:text-6xl font-bold leading-tight">{title}</h1>
              <p className="text-base text-secondary max-w-lg">
                {description}
              </p>
              <Flex gap={16}>
                <Button
                  type="primary"
                  iconPlacement='end'
                  className='text-[var(--color-white)]! py-5 px-4'
                  onClick={() => setIsModalOpen(true)}
                >
                  Shop now
                </Button>

                {/* <Button className='p-4'>Watch video</Button> */}
              </Flex>
            </Flex>
          </Col>
          <Col xs={24} md={12} className="py-8 md:py-14">
            <img
              src={image}
              alt="Hero product preview"
              className="w-full h-auto object-contain"
            />
          </Col>
        </Row>
      </Container>
      <BookModal
        isOpen={isModalOpen}
        handleCancel={handleCancel}
        productTitle={productName}
        productPrice={price}
        image={image}
      />
    </section>
  );
};
