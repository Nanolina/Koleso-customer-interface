import { useSelector } from 'react-redux';
import { Container } from '../components/Container';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { Categories } from '../modules/categories';
import { CentralContainer } from '../ui/CentralContainer';

export const CategoriesPage = () => {
  const section = useSelector((state: any) => state.catalog.section?.title);

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
