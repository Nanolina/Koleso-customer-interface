import { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { Container } from '../components/Container';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { DeliveryQRCode, SearchQueries } from '../modules/home';
import { ProductList } from '../modules/product';
import { AppDispatch } from '../redux/store';
import { handleGetAllProducts } from '../redux/thunks/product';
import { CentralContainer } from '../ui/CentralContainer';

export const Home: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [isEnabledSearch, setIsEnabledSearch] = useState(false);

  useEffect(() => {
    dispatch(handleGetAllProducts());
  }, []);

  return (
    <Container>
      <Header
        showSearchBar={true}
        isEnabledSearch={isEnabledSearch}
        setIsEnabledSearch={setIsEnabledSearch}
      />
      <CentralContainer isPadding={true} isMinPadding={true}>
        {!isEnabledSearch && (
          <>
            {/* <View style={styles.container}>
              <DeliveryQRCode />
            </View> */}
            <ProductList />
          </>
        )}
        {isEnabledSearch && <SearchQueries />}
      </CentralContainer>
      <Footer />
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 5,
  },
});
