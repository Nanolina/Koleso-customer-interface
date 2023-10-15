import { useSelector } from 'react-redux';
import { productCards } from '../../mockData';
import { Container } from '../components/Container';
import { Footer } from '../components/Footer';
import { HeaderWithFilterSort } from '../components/HeaderWithFilterSort';
import { ProductList } from '../modules/productCard';
import { CentralContainer } from '../ui/CentralContainer';

export const Main = () => {
  const category = useSelector((state: any) => state.catalog.category);
  const subcategory = useSelector((state: any) => state.catalog.subcategory);

  return (
    <Container>
      <HeaderWithFilterSort
        title={(subcategory && subcategory.title) || category.title}
      />
      <CentralContainer isPadding={true} isMinPadding={true}>
        <ProductList data={productCards} />
      </CentralContainer>
      <Footer />
    </Container>
  );
};
