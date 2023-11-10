import { Container } from '../components/Container';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { Finances } from '../modules/finances';
import { CentralContainer } from '../ui/CentralContainer';

export const FinancesPage: React.FC = () => {
  return (
    <Container>
      <Header title="Finances" hasButtonBack />
      <CentralContainer isPadding={true} isMinPadding={true}>
        <Finances />
      </CentralContainer>
      <Footer />
    </Container>
  );
};
