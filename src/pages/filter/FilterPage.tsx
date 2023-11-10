import { Container } from '../../components/Container';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { Filter } from '../../modules/filter';
import { CentralContainer } from '../../ui/CentralContainer';

export const FilterPage: React.FC = () => {
  return (
    <Container>
      <Header title="Filter" hasButtonBack />
      <CentralContainer isPadding={true}>
        <Filter />
      </CentralContainer>
      <Footer />
    </Container>
  );
};
