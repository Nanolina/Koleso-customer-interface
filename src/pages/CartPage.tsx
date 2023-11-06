import { useNavigation } from '@react-navigation/native';
import { Container } from '../components/Container';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { css, currency } from '../consts';
import { Cart } from '../modules/cart';
import { Button } from '../ui/Button';
import { CentralContainer } from '../ui/CentralContainer';

export const CartPage = () => {
  const navigation: any = useNavigation();

  return (
    <Container>
      <Header title="Cart" hasButton={false} />
      <CentralContainer isPadding={true} isMinPadding={true}>
        <Cart />
      </CentralContainer>
      <Button
        text="Checkout"
        onPress={() => navigation.navigate('CheckoutPage')}
        backgroundColor={css.colors.orange}
        extra={`50 ${currency}`}
      />
      <Footer />
    </Container>
  );
};
