import { useState } from 'react';
import { productCards } from '../../mockData';
import { Container } from '../components/Container';
import { Footer } from '../components/Footer';
import { HeaderWithSearch } from '../components/HeaderWithSearch';
import { DeliveryQRCode, SearchQueries } from '../modules/home';
import { ProductList } from '../modules/productCard';
import { CentralContainer } from '../ui/CentralContainer';

export const Home = () => {
  const [isEnabledSearch, setIsEnabledSearch] = useState(false);

  return (
    <Container>
      <HeaderWithSearch
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
