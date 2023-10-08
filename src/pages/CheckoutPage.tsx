import { Container } from '../components/Container';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { Checkout } from '../modules/checkout';
import { CentralContainer } from '../ui/CentralContainer';

export const CheckoutPage = () => {
  return (
    <Container>
      <Header title="Checkout" />
      <CentralContainer isPadding={true}>
        <Checkout />
      </CentralContainer>
      <Footer />
    </Container>
  );
};
