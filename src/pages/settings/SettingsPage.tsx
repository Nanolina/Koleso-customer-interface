import { useTranslation } from 'react-i18next';
import { Container } from '../../components/Container';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { Settings } from '../../modules/settings';
import { CentralContainer } from '../../ui/CentralContainer';

export const SettingsPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Container>
      <Header title={t('settings.label')} hasButtonBack />
      <CentralContainer isPadding={true}>
        <Settings />
      </CentralContainer>
      <Footer />
    </Container>
  );
};
