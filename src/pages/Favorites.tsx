import { productCards } from '../../mockData';
import { Container } from '../components/Container';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { ProductList } from '../modules/productCard';
import { CentralContainer } from '../ui/CentralContainer';

export const Favorites: React.FC = () => {
  return (
    <Container>
      <Header title="Favorites" />
      <CentralContainer isPadding={true} isMinPadding={true}>
        <ProductList data={productCards} />
      </CentralContainer>
      <Footer />
    </Container>
  );
};
