import { useRoute } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';
import { Container } from '../../components/Container';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { Input } from '../../modules/settings';
import { CentralContainer } from '../../ui/CentralContainer';

export const SettingsInputPage: React.FC = () => {
  const { t } = useTranslation('translation', { keyPrefix: 'settings' });

  const route: any = useRoute();
  const { title } = route.params;

  return (
    <Container>
      <Header title={t(title.toLowerCase())} hasButtonBack />
      <CentralContainer isPadding={true}>
        <Input title={title} />
      </CentralContainer>
      <Footer />
    </Container>
  );
};
