import { Container } from 'shared/ui/Container';
import { ProductSummary } from 'widgets/detail-page/detail-summary';
import { Footer } from 'widgets/footer/footer';
import { Header } from 'widgets/header/header';

export const DetailPage = () => {
  return (
    <>
      <Header />
      <Container>
        <ProductSummary />
      </Container>
      <Footer />
    </>
  );
};
