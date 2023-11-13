import { useTranslation } from 'react-i18next';
import { Container } from '../../components/Container';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { Birthday } from '../../modules/settings';
import { CentralContainer } from '../../ui/CentralContainer';

export const SettingsBirthdayPage: React.FC = () => {
  const { t } = useTranslation('translation', { keyPrefix: 'settings' });

  return (
    <Container>
      <Header title={t('dateOfBirth')} hasButtonBack />
      <CentralContainer isPadding={true}>
        <Birthday />
      </CentralContainer>
      <Footer />
    </Container>
  );
};
