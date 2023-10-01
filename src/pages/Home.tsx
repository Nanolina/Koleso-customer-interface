import { StyleSheet, View } from 'react-native';
import { productCards } from '../../mockData';
import { Container } from '../components/Container';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { DeliveryQRCode } from '../modules/home/components/QRCode/DeliveryQRCode';
import { ProductList } from '../modules/home/components/productCard/ProductList';

export const Home = () => {
  return (
    <Container>
      <Header />
      <View style={styles.mainContent}>
        <DeliveryQRCode />
        <ProductList data={productCards} />
      </View>
      <Footer />
    </Container>
  );
};

const styles = StyleSheet.create({
  mainContent: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 5,
    paddingTop: 5,
  },
});
