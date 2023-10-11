import { StyleSheet, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { toggleModal } from '../../redux/slices/paymentSlice';
import { Container } from '../components/Container';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { Error, Success } from '../modules/modal';
import { Payment } from '../modules/payment';
import { ButtonCloseModal } from '../ui/ButtonCloseModal';
import { CentralContainer } from '../ui/CentralContainer';
import { SafeAreaViewContainer } from '../ui/SafeAreaViewContainer';

export const PaymentPage = () => {
  const { isModalOpen } = useSelector((state: any) => state.payment);
  const dispatch = useDispatch();

  // mock data
  const payment = true;

  return (
    <Container>
      {isModalOpen && payment && (
        <>
          <SafeAreaViewContainer>
            <View style={styles.container}>
              <ButtonCloseModal onPress={() => dispatch(toggleModal(false))} />
              <Success />
            </View>
          </SafeAreaViewContainer>
        </>
      )}

      {isModalOpen && !payment && (
        <>
          <SafeAreaViewContainer>
            <View style={styles.container}>
              <ButtonCloseModal onPress={() => dispatch(toggleModal(false))} />
              <Error />
            </View>
          </SafeAreaViewContainer>
        </>
      )}

      {!isModalOpen && (
        <>
          <Header title="Payment" />
          <CentralContainer isPadding={true}>
            <Payment />
          </CentralContainer>
        </>
      )}
      <Footer />
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 30,
  },
});
