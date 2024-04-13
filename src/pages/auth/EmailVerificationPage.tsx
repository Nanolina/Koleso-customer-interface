import { useRoute } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';
import { Container } from '../../components/Container';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { EmailVerificationForm } from '../../modules/auth';
import { CentralContainer } from '../../ui/CentralContainer';

export const EmailVerificationPage: React.FC = () => {
  const { t } = useTranslation();
  const route: any = useRoute();
  const { codeType } = route.params;

  return (
    <Container>
      <Header hasButtonBack title={t('auth.code.email.confirm')} />
      <CentralContainer isPadding={true}>
        <EmailVerificationForm codeType={codeType} />
      </CentralContainer>
      <Footer />
    </Container>
  );
};
