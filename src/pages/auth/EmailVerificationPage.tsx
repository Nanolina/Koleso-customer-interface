import { useTranslation } from 'react-i18next';
import { Container } from '../../components/Container';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { EmailVerificationForm } from '../../modules/auth';
import { CentralContainer } from '../../ui/CentralContainer';

export const EmailVerificationPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Container>
      <Header hasButtonBack />
      <CentralContainer isPadding={true}>
        <EmailVerificationForm />
      </CentralContainer>
      <Footer />
    </Container>
  );
};
