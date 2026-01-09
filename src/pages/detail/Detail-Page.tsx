import { Container } from 'shared/ui/Container';
import { DetailLocation } from 'widgets/detail-page/detail-location';
import { DetailDescription } from 'widgets/detail-page/detail-description';
import { WriteReview } from 'widgets/detail-page/write-review';
import { Footer } from 'widgets/footer/footer';
import { Header } from 'widgets/header/header';

export const DetailPage = () => {
  return (
    <>
      <Header />
      <Container>
        <section>
          <DetailLocation />
          <DetailDescription />
          <WriteReview />
        </section>
      </Container>
      <Footer />
    </>
  );
};
