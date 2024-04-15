import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { Container } from '../components/Container';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { ProductList } from '../modules/product';
import { IRootState } from '../redux/rootReducer';
import { CentralContainer } from '../ui/CentralContainer';
import { Loader } from '../ui/Loader';

export const Main: React.FC = () => {
  const { t } = useTranslation();

  const { loading } = useSelector((state: IRootState) => state.products);

  const category = useSelector((state: IRootState) => state.catalog.category);
  const subcategory = useSelector(
    (state: IRootState) => state.catalog.subcategory
  );

  if (loading) return <Loader />;

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
        <ProductList />
      </CentralContainer>
      <Footer />
    </Container>
  );
};
