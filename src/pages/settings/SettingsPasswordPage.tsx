import { Container } from '../../components/Container';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { ChangePassword } from '../../modules/settings';
import { CentralContainer } from '../../ui/CentralContainer';

export const SettingsPasswordPage = () => {
  return (
    <Container>
      <Header title="Change password" hasButtonBack />
      <CentralContainer isPadding={true}>
        <ChangePassword />
      </CentralContainer>
      <Footer />
    </Container>
  );
};
