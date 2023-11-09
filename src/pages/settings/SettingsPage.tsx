import { Container } from '../../components/Container';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { Settings } from '../../modules/settings';
import { CentralContainer } from '../../ui/CentralContainer';

export const SettingsPage = () => {
  return (
    <Container>
      <Header title="Settings" hasButtonBack />
      <CentralContainer isPadding={true}>
        <Settings />
      </CentralContainer>
      <Footer />
    </Container>
  );
};
