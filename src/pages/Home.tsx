import { useState } from 'react';
import { productCards } from '../../mockData';
import { Container } from '../components/Container';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { DeliveryQRCode, SearchQueries } from '../modules/home';
import { ProductList } from '../modules/productCard';
import { CentralContainer } from '../ui/CentralContainer';

export const Home: React.FC = () => {
  const [isEnabledSearch, setIsEnabledSearch] = useState(false);

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
