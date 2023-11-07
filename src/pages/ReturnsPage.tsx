import { productCards } from '../../mockData';
import { Container } from '../components/Container';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { Returns } from '../modules/returns';
import { CentralContainer } from '../ui/CentralContainer';

export const ReturnsPage = () => {
  return (
    <Container>
      <Header title="My returns" />
      <CentralContainer isPadding={true} isMinPadding={true}>
        <Returns data={productCards} />
      </CentralContainer>
      <Footer />
    </Container>
  );
};
