import { Container } from '../components/Container';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { Notifications } from '../modules/notifications';
import { CentralContainer } from '../ui/CentralContainer';

export const NotificationsPage: React.FC = () => {
  return (
    <Container>
      <Header title="Notifications" />
      <CentralContainer isPadding={true} isMinPadding={true}>
        <Notifications />
      </CentralContainer>
      <Footer />
    </Container>
  );
};
