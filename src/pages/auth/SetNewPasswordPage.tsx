import { useRoute } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { Container } from '../../components/Container';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { MessageBox } from '../../components/MessageBox';
import { SetNewPasswordForm } from '../../modules/auth';
import { clearMessages } from '../../redux/slices/userSlice';
import { AppDispatch } from '../../redux/store';
import { CentralContainer } from '../../ui/CentralContainer';

export const SetNewPasswordPage: React.FC = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch<AppDispatch>();
  const route: any = useRoute();
  let { userId } = route.params;

  return (
    <Container>
      <Header title={t('auth.setNewPassword')} hasButtonBack />
      <CentralContainer isPadding={true}>
        {userId ? (
          <SetNewPasswordForm userId={userId} />
        ) : (
          <MessageBox
            errorMessage="User not found, please try again"
            clearMessage={() => dispatch(clearMessages())}
          />
        )}
      </CentralContainer>
      <Footer />
    </Container>
  );
};
