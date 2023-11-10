import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Container } from '../components/Container';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { ErrorModal, SuccessModal } from '../modules/modal';
import { Payment } from '../modules/payment';
import { CentralContainer } from '../ui/CentralContainer';

export const PaymentPage: React.FC = () => {
  // true = mock data
  const [isModalVisible, setModalVisible] = useState(true);

  // mock data
  const payment = true;

  return (
    <Container>
      {isModalVisible && payment && (
        <View style={styles.container}>
          <SuccessModal onClose={() => setModalVisible(false)} />
        </View>
      )}

      {isModalVisible && !payment && (
        <View style={styles.container}>
          <ErrorModal onClose={() => setModalVisible(false)} />
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
