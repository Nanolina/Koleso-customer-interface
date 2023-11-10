import { useSelector } from 'react-redux';
import { Container } from '../components/Container';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { Subcategories } from '../modules/catalog';
import { CentralContainer } from '../ui/CentralContainer';
import { RootState } from '../../redux/rootReducer';

export const SubcategoriesPage: React.FC = () => {
  const category = useSelector((state: RootState) => state.catalog.category.title);

  return (
    <Container>
      <Header title={category} hasButtonBack />
      <CentralContainer isPadding={true} isMinPadding={true}>
        <Subcategories />
      </CentralContainer>
      <Footer />
    </Container>
  );
};
