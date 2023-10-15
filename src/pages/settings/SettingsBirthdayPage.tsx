import { Container } from '../../components/Container';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { Birthday } from '../../modules/settings';
import { CentralContainer } from '../../ui/CentralContainer';

export const SettingsBirthdayPage = () => {
  return (
    <Container>
      <Header title="Date of birthday" />
      <CentralContainer isPadding={true}>
        <Birthday />
      </CentralContainer>
      <Footer />
    </Container>
  );
};
