import { useSelector } from 'react-redux';
import { Container } from '../components/Container';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { Subcategories } from '../modules/subcategories';
import { CentralContainer } from '../ui/CentralContainer';

export const SubcategoriesPage = () => {
  const category = useSelector((state: any) => state.catalog.category.title);

  return (
    <Container>
      <Header title={category} />
      <CentralContainer isPadding={true} isMinPadding={true}>
        <Subcategories />
      </CentralContainer>
      <Footer />
    </Container>
  );
};
