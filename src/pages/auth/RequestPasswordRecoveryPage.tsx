import { useTranslation } from 'react-i18next';
import { Container } from '../../components/Container';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { RequestPasswordRecoveryForm } from '../../modules/auth';
import { CentralContainer } from '../../ui/CentralContainer';

export const RequestPasswordRecoveryPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Container>
      <Header title={t('auth.forgotPassword')} hasButtonBack/>
      <CentralContainer isPadding={true}>
        <RequestPasswordRecoveryForm />
      </CentralContainer>
      <Footer />
    </Container>
  );
};
