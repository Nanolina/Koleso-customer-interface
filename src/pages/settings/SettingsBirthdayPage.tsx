import { Container } from '../../components/Container';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { Birthday } from '../../modules/settings';
import { CentralContainer } from '../../ui/CentralContainer';

export const SettingsBirthdayPage: React.FC = () => {
  return (
    <Container>
      <Header title="Date of birthday" hasButtonBack />
      <CentralContainer isPadding={true}>
        <Birthday />
      </CentralContainer>
      <Footer />
    </Container>
  );
};
