import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { Container } from '../components/Container';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { Subcategories } from '../modules/catalog';
import { IRootState } from '../redux/rootReducer';
import { CentralContainer } from '../ui/CentralContainer';

export const SubcategoriesPage: React.FC = () => {
  const { t } = useTranslation();

  const category = useSelector(
    (state: IRootState) => state.catalog.category.title
  );

  return (
    <Container>
      <Header title={t(`catalog.${category}`)} hasButtonBack />
      <CentralContainer isPadding={true} isMinPadding={true}>
        <Subcategories />
      </CentralContainer>
      <Footer />
    </Container>
  );
};
