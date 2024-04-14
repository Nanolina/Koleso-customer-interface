import { useTranslation } from 'react-i18next';
import { Container } from '../../components/Container';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { SignUpForm } from '../../modules/auth';
import { CentralContainer } from '../../ui/CentralContainer';

export const SignUpPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Container>
      <Header title={t('auth.signup')} hasButtonBack />
      <CentralContainer isPadding={true}>
        <SignUpForm />
      </CentralContainer>
      <Footer />
    </Container>
  );
};
