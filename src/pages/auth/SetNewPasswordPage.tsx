import { useTranslation } from 'react-i18next';
import { Container } from '../../components/Container';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { SetNewPasswordForm } from '../../modules/auth';
import { CentralContainer } from '../../ui/CentralContainer';

export const SetNewPasswordPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Container>
      <Header title={t('auth.setNewPassword')} hasButtonBack />
      <CentralContainer isPadding={true}>
        <SetNewPasswordForm />
      </CentralContainer>
      <Footer />
    </Container>
  );
};
