import { useCallback, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Container } from '../components/Container';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { StatusModal } from '../modules/modal';
import { Payment } from '../modules/payment';
import { CentralContainer } from '../ui/CentralContainer';

export const PaymentPage: React.FC = () => {
  // true = mock data
  const [isModalVisible, setModalVisible] = useState(true);

  // mock data
  const payment = false;

  const onClose = useCallback(() => {
    setModalVisible(false);
  }, []);

  const modalProps = payment
    ? {
        type: 'success',
        title: 'Thank you for your purchase!',
        message: 'Payment was successful',
        orderId: '32345678523456',
        widthImage: 60,
        heightImage: 60,
        topImage: 30,
        rightImage: 10,
      }
    : {
        type: 'error',
        title: 'Sorry',
        message: 'There was an error',
        widthImage: 40,
        heightImage: 40,
        topImage: 20,
        rightImage: 70,
      };

  return (
    <Container>
      {isModalVisible && (
        <View style={styles.container}>
          <StatusModal {...modalProps} onClose={onClose} />
        </View>
      )}

      {!isModalVisible && (
        <>
          <Header title="Payment" hasButtonBack />
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
    flex: 1,
    gap: 30,
  },
});
