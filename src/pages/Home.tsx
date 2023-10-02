import { useState } from 'react';
import { StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-virtualized-view';
import { productCards } from '../../mockData';
import { Container } from '../components/Container';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { css } from '../consts';
import { DeliveryQRCode } from '../modules/home/components/QRCode/DeliveryQRCode';
import { ProductList } from '../modules/home/components/productCard/ProductList';
import { SearchQueries } from '../modules/home/components/search/SearchQueries';

export const Home = () => {
  const [searchOn, setSearchOn] = useState(false);

  return (
    <Container>
      <Header searchOn={searchOn} setSearchOn={setSearchOn} />
      <ScrollView style={styles.mainContent}>
        {!searchOn && (
          <>
            <DeliveryQRCode />
            <ProductList data={productCards} />
          </>
        )}
        {searchOn && <SearchQueries />}
      </ScrollView>
      <Footer />
    </Container>
  );
};

const styles = StyleSheet.create({
  mainContent: {
    flex: 1,
    backgroundColor: css.colors.white,
    paddingHorizontal: 5,
    paddingTop: 5,
  },
});
