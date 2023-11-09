import { useRoute } from '@react-navigation/native';
import { Container } from '../../components/Container';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { CheckboxList } from '../../modules/settings';
import { CentralContainer } from '../../ui/CentralContainer';

export const SettingsCheckboxPage = () => {
  const route: any = useRoute();
  const { title, items } = route.params;

  return (
    <Container>
      <Header title={title} hasButtonBack />
      <CentralContainer isPadding={true}>
        <CheckboxList items={items} />
      </CentralContainer>
      <Footer />
    </Container>
  );
};
