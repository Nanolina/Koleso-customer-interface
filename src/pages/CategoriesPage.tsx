import { Container } from '../components/Container';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { Categories } from '../modules/categories';
import { CentralContainer } from '../ui/CentralContainer';

export const CategoriesPage = () => {
  return (
    <Container>
      <Header />
      <CentralContainer>
        <Categories />
      </CentralContainer>
      <Footer />
    </Container>
  );
};
