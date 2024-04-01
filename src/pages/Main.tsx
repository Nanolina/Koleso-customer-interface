import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { productCards } from '../../mockData';
import { Container } from '../components/Container';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { ProductList } from '../modules/productCard';
import { IRootState } from '../redux/rootReducer';
import { CentralContainer } from '../ui/CentralContainer';

export const Main: React.FC = () => {
  const { t } = useTranslation();

  const category = useSelector((state: IRootState) => state.catalog.category);
  const subcategory = useSelector(
    (state: IRootState) => state.catalog.subcategory
  );

  return (
    <Container>
      <Header
        title={
          (subcategory && t(`catalog.${subcategory.title}`)) ||
          t(`catalog.${category.title}`)
        }
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
