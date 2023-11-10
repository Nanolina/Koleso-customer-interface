import { productCards } from '../../mockData';
import { Container } from '../components/Container';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { Returns } from '../modules/returns';
import { CentralContainer } from '../ui/CentralContainer';

export const ReturnsPage: React.FC = () => {
  return (
    <Container>
      <Header title="My returns" hasButtonBack />
      <CentralContainer isPadding={true} isMinPadding={true}>
        <Returns data={productCards} />
      </CentralContainer>
      <Footer />
    </Container>
  );
};
