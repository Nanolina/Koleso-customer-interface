import { useTranslation } from 'react-i18next';
import { Container } from '../../components/Container';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { LoginForm } from '../../modules/auth';
import { CentralContainer } from '../../ui/CentralContainer';

export const LoginPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Container>
      <Header title={t('auth.login')} />
      <CentralContainer isPadding={true}>
        <LoginForm />
      </CentralContainer>
      <Footer />
    </Container>
  );
};
