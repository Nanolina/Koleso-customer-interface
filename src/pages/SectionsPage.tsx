import { Container } from '../components/Container';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { Sections } from '../modules/section';
import { CentralContainer } from '../ui/CentralContainer';

export const SectionsPage = () => {
  return (
    <Container>
      <Header />
      <CentralContainer>
        <Sections />
      </CentralContainer>
      <Footer />
    </Container>
  );
};
