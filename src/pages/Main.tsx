import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { Container } from '../components/Container';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { ProductList } from '../modules/product';
import { IRootState } from '../redux/rootReducer';
import { AppDispatch } from '../redux/store';
import { handleGetAllProducts } from '../redux/thunks/product';
import { CentralContainer } from '../ui/CentralContainer';

export const Main: React.FC = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch<AppDispatch>();

  const category = useSelector((state: IRootState) => state.catalog.category);
  const subcategory = useSelector(
    (state: IRootState) => state.catalog.subcategory
  );

  useEffect(() => {
    dispatch(handleGetAllProducts());
  }, []);

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
