import { Container } from '../components/Container';
import { Footer } from '../components/Footer';
import { HeaderWithSearch } from '../components/HeaderWithSearch';
import { Sections } from '../modules/section';
import { CentralContainer } from '../ui/CentralContainer';

export const SectionsPage = () => {
  return (
    <Container>
      <HeaderWithSearch />
      <CentralContainer>
        <Sections />
      </CentralContainer>
      <Footer />
    </Container>
  );
};
