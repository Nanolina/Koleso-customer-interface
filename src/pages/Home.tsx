import { useState } from 'react';
import { StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import { Container } from '../components/Container';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { SearchQueries } from '../modules/home';
import { ProductList } from '../modules/product';
import { IRootState } from '../redux/rootReducer';
import { CentralContainer } from '../ui/CentralContainer';
import { Loader } from '../ui/Loader';

export const Home: React.FC = () => {
  const [isEnabledSearch, setIsEnabledSearch] = useState(false);
  const { loading } = useSelector((state: IRootState) => state.products);

  if (loading) return <Loader />;

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
