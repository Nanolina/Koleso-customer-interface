import { Container } from '../components/Container';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { Cart } from '../modules/cart';
import { CentralContainer } from '../ui/CentralContainer';

export const CartPage = () => {
  return (
    <Container>
      <Header title="Cart" />
      <CentralContainer isPadding={true}>
        <Cart />
      </CentralContainer>
      <Footer />
    </Container>
  );
};
