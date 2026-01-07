import { Col, Flex, Row, Typography } from 'antd';
import { Container } from 'shared/ui/Container';

import { useState } from 'react';
import { ProductCard } from './product-card';
import { ProductPagination } from './product-pagination';
import { products } from './model/data';
import { Link, generatePath } from 'react-router';
import { ROUTES_PATHS } from 'shared/lib/react/routes-paths';
import { SortByFilter } from './product-filter/sortby-filter';
// import { CategoryFilter } from './product-filter/Category-Filter';
// import { BrandsFilter } from './product-filter/Brands-Filter';

const PAGE_SIZE = 6;
const { Text } = Typography;

export const Product = () => {
  const [page, setPage] = useState(1);

  const start = (page - 1) * PAGE_SIZE;
  const currentProducts = products.slice(start, start + PAGE_SIZE);

  return (
    <Container>
      <Row gutter={40} className="mt-20">
        <Col span={6}>
          {/* <Flex vertical gap={12}>
            <Text style={{ fontSize: '24px', fontWeight: '700', paddingBottom: '40px' }}>
              Filters
            </Text>

            <CategoryFilter />
            <BrandsFilter />
          </Flex> */}
        </Col>

        <Col span={18}>
          <Flex justify="space-between" align="start">
            <Flex vertical style={{ paddingBottom: '40px' }}>
              <Text style={{ fontSize: '30px', fontWeight: 700 }}>New Arrivals</Text>
              <Text type="secondary">
                Showing {page}-{PAGE_SIZE} / {products.length} products
              </Text>
            </Flex>
            <Flex align="center" gap={5}>
              <Text type="secondary">Sort by:</Text>
              <SortByFilter />
            </Flex>
          </Flex>
          <Row gutter={[24, 24]}>
            {currentProducts.map((product) => (
              <Col span={8} key={product.id}>
                <Link
                  to={generatePath(ROUTES_PATHS.DETAIL, {
                    id: product.id,
                  })}>
                  <ProductCard product={product} />
                </Link>
              </Col>
            ))}
          </Row>

          <div style={{ marginTop: 32 }}>
            <ProductPagination total={products.length} pageSize={PAGE_SIZE} onChange={setPage} />
          </div>
        </Col>
      </Row>
    </Container>
  );
};
