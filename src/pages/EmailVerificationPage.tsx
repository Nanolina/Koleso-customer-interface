import { useTranslation } from 'react-i18next';
import { Container } from '../components/Container';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { EmailVerificationForm } from '../modules/auth';
import { CentralContainer } from '../ui/CentralContainer';

export const EmailVerificationPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Container>
      <Header title={t('auth.code.email.confirm')} hasButtonBack />
      <CentralContainer isPadding={true} isMinPadding={true}>
        <EmailVerificationForm />
      </CentralContainer>
      <Footer />
    </Container>
  );
};
