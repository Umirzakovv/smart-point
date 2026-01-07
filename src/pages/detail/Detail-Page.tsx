import { Container } from 'shared/ui/Container';
import { DetailSummary } from 'widgets/detail-page/detail-summary';
import { WriteReview } from 'widgets/detail-page/write-review';
import { Footer } from 'widgets/footer/footer';
import { Header } from 'widgets/header/header';

export const DetailPage = () => {
  return (
    <>
      <Header />
      <Container>
        <section>
          <DetailSummary />
          <WriteReview />
        </section>
      </Container>
      <Footer />
    </>
  );
};
