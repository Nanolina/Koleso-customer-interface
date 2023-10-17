import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Container } from '../components/Container';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { Error, Success } from '../modules/modal';
import { Payment } from '../modules/payment';
import { CentralContainer } from '../ui/CentralContainer';
import { SafeAreaViewContainer } from '../ui/SafeAreaViewContainer';

export const PaymentPage = () => {
  // true = mock data
  const [isModalVisible, setModalVisible] = useState(true);

  // mock data
  const payment = true;

  return (
    <Container>
      {isModalVisible && payment && (
        <>
          <SafeAreaViewContainer>
            <View style={styles.container}>
              <Success onClose={() => setModalVisible(false)} />
            </View>
          </SafeAreaViewContainer>
        </>
      )}

      {isModalVisible && !payment && (
        <>
          <SafeAreaViewContainer>
            <View style={styles.container}>
              <Error onClose={() => setModalVisible(false)} />
            </View>
          </SafeAreaViewContainer>
        </>
      )}

      {!isModalVisible && (
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
