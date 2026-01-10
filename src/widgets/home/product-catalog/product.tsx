import { Col, Flex, Row, Typography } from 'antd';
import { Container } from 'shared/ui/container';
import { useState } from 'react';
import { ProductCard } from './product-card';
import { ProductPagination } from './product-pagination';
import { products } from './model/data';
import { Link, generatePath } from 'react-router';
import { ROUTES_PATHS } from 'shared/lib/react/routes-paths';
// import { SortByFilter } from './product-filter/sortby-filter';
// import { CategoryFilter } from './product-filter/category-filter';
// import { BrandsFilter } from './product-filter/brands-filter';

const PAGE_SIZE = 8;
const { Text } = Typography;

export const Product = () => {
  const [page, setPage] = useState(1);

  const start = (page - 1) * PAGE_SIZE;
  const currentProducts = products.slice(start, start + PAGE_SIZE);

  return (
    <Container>
      {/* <Row gutter={40} className="mt-20">
        <Col span={6}>
          <Flex vertical gap={12}>
            <Text className='text-2xl! font-bold pb-10' >
              Filters
            </Text>

            <CategoryFilter />
            <BrandsFilter />
          </Flex>
        </Col> */}

        {/* <Col span={18}> */}
          <Flex justify="space-between" align="center">
            <Flex vertical className='pb-10!'>
              <Text className='text-3xl! font-bold'>New Arrivals</Text>
              <Text type="secondary">
                Showing {page}-{PAGE_SIZE} / {products.length} products
              </Text>
            </Flex>
            
          </Flex>
          <Row gutter={[28, 28]} justify={'space-between'}>
            {currentProducts.map((product) => (
              <Col span={6} key={product.id} className='px-0!'>
                <Link
                  className='flex! justify-center!'
                  to={generatePath(ROUTES_PATHS.DETAIL, {
                    id: product.id,
                  })}>
                  <ProductCard product={product} />
                </Link>
              </Col>
            ))}
          </Row>

          <div className='mt-8'>
            <ProductPagination total={products.length} pageSize={PAGE_SIZE} onChange={setPage} />
          </div>
        {/* </Col> */}
      {/* </Row>  */}
    </Container>
  );
};
