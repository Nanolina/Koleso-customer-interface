import { useSelector } from 'react-redux';
import { productCards } from '../../mockData';
import { Container } from '../components/Container';
import { Footer } from '../components/Footer';
import { HeaderWithSearch } from '../components/HeaderWithSearch';
import { DeliveryQRCode, ProductList, SearchQueries } from '../modules/home';
import { CentralContainer } from '../ui/CentralContainer';

export const Home = () => {
  const isEnabledSearch = useSelector((state: any) => state.search.isEnabled);
  return (
    <Container>
      <HeaderWithSearch />
      <CentralContainer>
        {!isEnabledSearch && (
          <>
            <DeliveryQRCode />
            <ProductList data={productCards} />
          </>
        )}
        {isEnabledSearch && <SearchQueries />}
      </CentralContainer>
      <Footer />
    </Container>
  );
};
