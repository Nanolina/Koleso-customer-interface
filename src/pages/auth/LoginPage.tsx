import { useTranslation } from 'react-i18next';
import { Container } from '../../components/Container';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { Login } from '../../modules/auth';
import { CentralContainer } from '../../ui/CentralContainer';

export const LoginPage: React.FC = () => {
  const { t } = useTranslation('translation', { keyPrefix: 'auth' });

  return (
    <Container>
      <Header title={t('logIn')} />
      <CentralContainer isPadding={true}>
        <Login />
      </CentralContainer>
      <Footer />
    </Container>
  );
};
