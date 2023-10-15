import { Container } from '../components/Container';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { SortComponents } from '../modules/sort';
import { CentralContainer } from '../ui/CentralContainer';

export const SortPage = () => {
  return (
    <Container>
      <Header title="Sort" />
      <CentralContainer isPadding={true} isMinPadding={true}>
        <SortComponents />
      </CentralContainer>
      <Footer />
    </Container>
  );
};
