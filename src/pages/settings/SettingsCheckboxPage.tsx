import { useRoute } from '@react-navigation/native';
import { Container } from '../../components/Container';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { CheckboxList, SettingsKey } from '../../modules/settings';
import { CentralContainer } from '../../ui/CentralContainer';

export const SettingsCheckboxPage: React.FC = () => {
  const route: any = useRoute();
  const { title, items } = route.params;

  const keyType: SettingsKey = title === 'Language' ? 'language' : 'gender';

  return (
    <Container>
      <Header title={title} hasButtonBack />
      <CentralContainer isPadding={true}>
        <CheckboxList title={title} items={items} keyType={keyType} />
      </CentralContainer>
      <Footer />
    </Container>
  );
};
