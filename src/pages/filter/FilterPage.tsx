import { Container } from '../../components/Container';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { Filter } from '../../modules/filter';
import { CentralContainer } from '../../ui/CentralContainer';

export const FilterPage = () => {
  return (
    <Container>
      <Header title="Filter" />
      <CentralContainer isPadding={true}>
        <Filter />
      </CentralContainer>
      <Footer />
    </Container>
  );
};
