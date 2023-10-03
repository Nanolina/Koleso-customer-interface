import { Container } from '../components/Container';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { Cards } from '../modules/catalog';
import { CentralContainer } from '../ui/CentralContainer';

export const Catalog = () => {
  return (
    <Container>
      <Header />
      <CentralContainer>
        <Cards />
      </CentralContainer>
      <Footer />
    </Container>
  );
};
