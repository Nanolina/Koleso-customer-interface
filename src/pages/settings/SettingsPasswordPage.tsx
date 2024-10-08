import { useTranslation } from 'react-i18next';
import { Container } from '../../components/Container';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { ChangePassword } from '../../modules/settings';
import { CentralContainer } from '../../ui/CentralContainer';

export const SettingsPasswordPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Container>
      <Header title={t('settings.changePassword')} hasButtonBack />
      <CentralContainer isPadding={true}>
        <ChangePassword />
      </CentralContainer>
      <Footer />
    </Container>
  );
};
