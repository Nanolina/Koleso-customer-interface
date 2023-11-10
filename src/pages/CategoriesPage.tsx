import { useSelector } from 'react-redux';
import { RootState } from '../../redux/rootReducer';
import { Container } from '../components/Container';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { Categories } from '../modules/catalog';
import { CentralContainer } from '../ui/CentralContainer';

export const CategoriesPage: React.FC = () => {
  const section = useSelector(
    (state: RootState) => state.catalog.section?.title
  );

  return (
    <Container>
      <Header title={section || ''} hasButtonBack />
      <CentralContainer isPadding={true} isMinPadding={true}>
        <Categories />
      </CentralContainer>
      <Footer />
    </Container>
  );
};
