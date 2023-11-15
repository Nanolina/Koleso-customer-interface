import { useRoute } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';
import { Container } from '../../components/Container';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { CheckboxList, CheckboxListLanguage } from '../../modules/settings';
import { CentralContainer } from '../../ui/CentralContainer';

export const SettingsCheckboxPage: React.FC = () => {
  const route: any = useRoute();
  const { title, items } = route.params;
  const { t } = useTranslation();

  return (
    <Container>
      <Header
        title={
          title === 'Language' ? t('settings.language') : t('settings.gender')
        }
        hasButtonBack
      />
      <CentralContainer isPadding={true}>
        {title === 'Language' ? <CheckboxListLanguage /> : <CheckboxList />}
      </CentralContainer>
      <Footer />
    </Container>
  );
};
