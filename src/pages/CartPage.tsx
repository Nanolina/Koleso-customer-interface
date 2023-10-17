import { Container } from '../components/Container';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { ButtonsCheckout, Cart } from '../modules/cart';
import { CentralContainer } from '../ui/CentralContainer';

export const CartPage = () => {
  return (
    <Container>
      <Header title="Cart" />
      <CentralContainer isPadding={true} isMinPadding={true}>
        <Cart />
      </CentralContainer>
      <ButtonsCheckout />
      <Footer />
    </Container>
  );
};
