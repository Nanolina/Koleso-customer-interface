import { Container } from '../components/Container';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { SortComponents } from '../modules/sort';
import { CentralContainer } from '../ui/CentralContainer';

export const SortPage: React.FC = () => {
  return (
    <Container>
      <Header title="Sort" hasButtonBack />
      <CentralContainer isPadding={true} isMinPadding={true}>
        <SortComponents />
      </CentralContainer>
      <Footer />
    </Container>
  );
};
