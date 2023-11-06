import { useNavigation } from '@react-navigation/native';
import { StyleSheet, View } from 'react-native';
import { Container } from '../components/Container';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { css, currency } from '../consts';
import { Checkout } from '../modules/checkout';
import { Button } from '../ui/Button';
import { CentralContainer } from '../ui/CentralContainer';

export const CheckoutPage = () => {
  const navigation: any = useNavigation();

  return (
    <Container>
      <Header title="Checkout" />
      <CentralContainer isPadding={true} isMinPadding={true}>
        <Checkout />
      </CentralContainer>
      <View style={styles.buttonContainer}>
        <Button
          text="Proceed payment"
          onPress={() => navigation.navigate('PaymentPage')}
          backgroundColor={css.colors.orange}
          width="90%"
          extra={`55 ${currency}`}
        />
      </View>
      <Footer />
    </Container>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: css.colors.white,
  },
});
