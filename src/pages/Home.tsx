import { useState } from 'react';
import { productCards } from '../../mockData';
import { Container } from '../components/Container';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { DeliveryQRCode, ProductList, SearchQueries } from '../modules/home';
import { CentralContainer } from '../ui/CentralContainer';

export const Home = () => {
  const [searchOn, setSearchOn] = useState(false);

  return (
    <Container>
      <Header searchOn={searchOn} setSearchOn={setSearchOn} />
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
