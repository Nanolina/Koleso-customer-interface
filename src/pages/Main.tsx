import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { productCards } from '../../mockData';
import { RootState } from '../../redux/rootReducer';
import { Container } from '../components/Container';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { ProductList } from '../modules/productCard';
import { CentralContainer } from '../ui/CentralContainer';

export const Main: React.FC = () => {
  const { t } = useTranslation('translation', { keyPrefix: 'catalog' });

  const category = useSelector((state: RootState) => state.catalog.category);
  const subcategory = useSelector(
    (state: RootState) => state.catalog.subcategory
  );

  return (
    <Container>
      <Header
        title={(subcategory && t(subcategory.title)) || t(category.title)}
        hasButtonBack
        showFilterSort
      />
      <CentralContainer isPadding={true} isMinPadding={true}>
        <ProductList data={productCards} />
      </CentralContainer>
      <Footer />
    </Container>
  );
};
