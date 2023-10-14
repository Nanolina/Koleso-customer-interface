import { Container } from '../components/Container';
import { Footer } from '../components/Footer';
import { HeaderWithSearch } from '../components/HeaderWithSearch';
import { Settings } from '../modules/settings';
import { CentralContainer } from '../ui/CentralContainer';

export const SettingsPage = () => {
  return (
    <Container>
      <HeaderWithSearch />
      <CentralContainer isPadding={true}>
        <Settings />
      </CentralContainer>
      <Footer />
    </Container>
  );
};
