import { Flex } from 'antd';
import { Footer } from 'shared/ui/footer';
import { Header } from 'shared/ui/header';
import { Hero } from 'widgets/home/hero';
import { Product } from 'widgets/home/product/product';

export const Home = () => {
  return (
    <>
      <Flex gap={'middle'} vertical>
        <Header />
        <Hero />
        <Product />
        <Footer />
      </Flex>
    </>
  );
};
