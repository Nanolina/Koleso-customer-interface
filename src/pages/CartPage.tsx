import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from '@react-navigation/native';
import { StyleSheet, View } from 'react-native';
import { Container } from '../components/Container';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { colors, currency } from '../consts';
import { Cart } from '../modules/cart';
import { Button } from '../ui/Button';
import { CentralContainer } from '../ui/CentralContainer';

export const CartPage: React.FC = () => {
  const navigation: NavigationProp<ParamListBase> = useNavigation();

  return (
    <Container>
      <Header title="Cart" />
      <CentralContainer isPadding={true} isMinPadding={true}>
        <Cart />
      </CentralContainer>
      <View style={styles.buttonContainer}>
        <Button
          text="Checkout"
          onPress={() =>
            navigation.navigate('OrderProcessingPage', { title: 'Checkout' })
          }
          backgroundColor={colors.orange}
          width="90%"
          extra={`50 ${currency}`}
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
    backgroundColor: colors.white,
  },
});
