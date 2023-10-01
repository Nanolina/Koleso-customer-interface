import { StyleSheet, View } from 'react-native';
import { Container } from '../components/Container';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { DeliveryQRCode } from '../modules/home/components/QRCode/DeliveryQRCode';

export const Home = () => {
  return (
    <Container>
      <Header />
      <View style={styles.mainContent}>
        <DeliveryQRCode />
      </View>
      <Footer />
    </Container>
  );
};

const styles = StyleSheet.create({
  mainContent: {
    flex: 1,
    backgroundColor: 'white',
    padding: 5,
  },
});
