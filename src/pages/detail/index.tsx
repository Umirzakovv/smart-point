import { Informations } from 'widgets/detail-page/informations';
import { PostReview } from 'widgets/detail-page/post-review';
import { Footer } from 'shared/ui/footer';
import { Header } from 'shared/ui/header';
import { Container } from 'shared/ui/Container';

export const DetailPage = () => {
  return (
    <>
      <Header />
      <Container>
        <section>
          <Informations />
          <PostReview />
        </section>
      </Container>
      <Footer />
    </>
  );
};
