import { useState } from 'react';
import { productCards } from '../../mockData';
import { Container } from '../components/Container';
import { Footer } from '../components/Footer';
import { HeaderWithSearch } from '../components/HeaderWithSearch';
import { DeliveryQRCode, ProductList, SearchQueries } from '../modules/home';
import { CentralContainer } from '../ui/CentralContainer';

export const Home = () => {
  const [searchOn, setSearchOn] = useState(false);

  return (
    <Container>
      <HeaderWithSearch searchOn={searchOn} setSearchOn={setSearchOn} />
      <CentralContainer>
        {!searchOn && (
          <>
            <DeliveryQRCode />
            <ProductList data={productCards} />
          </>
        )}
        {searchOn && <SearchQueries />}
      </CentralContainer>
      <Footer />
    </Container>
  );
};
