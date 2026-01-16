import { Col, Flex, Pagination, Row, Typography } from 'antd';
import { Container } from 'shared/ui/container';
import { useState } from 'react';
import { ProductCard } from './card';
import { products } from './model/data';
import { Link, generatePath } from 'react-router';
import { ROUTES_PATHS } from 'shared/lib/react/routes-paths';
// import {SortBy} from './product-filter/sortby'
// import {Category} from './product-filter/category';
// import { Brands} from './product-filter/brands';

import { BookModal } from 'shared/ui/book-modal';
import type { Product as ProductType } from './model/types';

const PAGE_SIZE = 16;
const { Text } = Typography;

export const Product = () => {
  const [page, setPage] = useState(1);
  const [selectedProduct, setSelectedProduct] = useState<ProductType | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const start = (page - 1) * PAGE_SIZE;
  const currentProducts = products.slice(start, start + PAGE_SIZE);

  const handleShopClick = (product: ProductType) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

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
            Showing {page}-{Math.min(products.length, PAGE_SIZE)} / {products.length} products
          </Text>
        </Flex>

      </Flex>
      <Row gutter={[16, 24]}>
        {currentProducts.map((product) => (
          <Col xs={24} sm={12} md={8} lg={6} key={product.id} className='px-0!'>
            <Link
              className='flex! justify-center!'
              to={generatePath(ROUTES_PATHS.DETAIL, {
                id: product.id,
              })}>
              <ProductCard product={product} onShopClick={handleShopClick} />
            </Link>
          </Col>
        ))}
      </Row>

      <div className='mt-8'>
        {products.length > 16 && <Pagination align="center" total={products.length} pageSize={PAGE_SIZE} onChange={setPage} showSizeChanger={false} />}
      </div>

      {selectedProduct && (
        <BookModal
          isOpen={isModalOpen}
          handleCancel={handleModalClose}
          productTitle={selectedProduct.title}
          productPrice={selectedProduct.discountPrice || selectedProduct.originalPrice}
          image={selectedProduct.image}
        />
      )}
      {/* </Col> */}
      {/* </Row>  */}
    </Container>
  );
};
