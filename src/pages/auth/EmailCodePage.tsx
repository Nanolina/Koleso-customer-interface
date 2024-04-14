import { useRoute } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';
import { Container } from '../../components/Container';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { EmailCodeForm } from '../../modules/auth';
import { CodeType } from '../../types';
import { CentralContainer } from '../../ui/CentralContainer';

export const EmailCodePage: React.FC = () => {
  const { t } = useTranslation();
  const route: any = useRoute();
  const { codeType } = route.params;

  let headerText;
  switch (codeType) {
    case CodeType.PASSWORD_RESET:
      headerText = t('auth.code.email.passwordReset');
      break;
    case CodeType.EMAIL_CONFIRMATION:
    default:
      headerText = t('auth.code.email.confirm');
      break;
  }

  return (
    <Container>
      <Header hasButtonBack title={headerText} />
      <CentralContainer isPadding={true}>
        <EmailCodeForm codeType={codeType} />
      </CentralContainer>
      <Footer />
    </Container>
  );
};
