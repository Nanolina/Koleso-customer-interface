import { useTranslation } from 'react-i18next';
import { Container } from '../components/Container';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { Notifications } from '../modules/notifications';
import { CentralContainer } from '../ui/CentralContainer';

export const NotificationsPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Container>
      <Header title={t('notifications.label')} />
      <CentralContainer isPadding={true} isMinPadding={true}>
        <Notifications />
      </CentralContainer>
      <Footer />
    </Container>
  );
};
