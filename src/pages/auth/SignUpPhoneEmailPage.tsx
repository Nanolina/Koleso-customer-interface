import { useTranslation } from 'react-i18next';
import { Container } from '../../components/Container';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { SignUpPhoneEmail } from '../../modules/auth';
import { CentralContainer } from '../../ui/CentralContainer';

export const SignUpPhoneEmailPage: React.FC = () => {
  const { t } = useTranslation('translation', { keyPrefix: 'auth' });

  return (
    <Container>
      <Header title={t('signUp')} hasButtonBack />
      <CentralContainer isPadding={true}>
        <SignUpPhoneEmail />
      </CentralContainer>
      <Footer />
    </Container>
  );
};
