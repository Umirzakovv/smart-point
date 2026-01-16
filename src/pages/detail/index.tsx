import { Container } from 'shared/ui/container';

import { Informations } from 'widgets/detail-page/informations';
import { PostReview } from 'widgets/detail-page/post-review';
import { Footer } from 'shared/ui/footer';
import { Header } from 'shared/ui/header';

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
