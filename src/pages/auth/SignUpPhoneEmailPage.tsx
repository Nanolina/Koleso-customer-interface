import { useTranslation } from 'react-i18next';
import { Container } from '../../components/Container';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { SignUpPhoneEmailForm } from '../../modules/auth/components/SignUpForm/SignUpPhoneEmailForm';
import { CentralContainer } from '../../ui/CentralContainer';

export const SignUpPhoneEmailPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Container>
      <Header title={t('auth.signUp')} hasButtonBack />
      <CentralContainer isPadding={true}>
        <SignUpPhoneEmailForm />
      </CentralContainer>
      <Footer />
    </Container>
  );
};
