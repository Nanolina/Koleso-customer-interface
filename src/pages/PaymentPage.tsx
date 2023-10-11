import { Container } from '../components/Container';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { Payment } from '../modules/payment';
import { CentralContainer } from '../ui/CentralContainer';

export const PaymentPage = () => {
  return (
    <Container>
      <Header title="Payment" />
      <CentralContainer isPadding={true}>
        <Payment />
      </CentralContainer>
      <Footer />
    </Container>
  );
};
