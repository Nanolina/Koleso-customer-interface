import { useRoute } from '@react-navigation/native';
import { Container } from '../../components/Container';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { Input } from '../../modules/settings';
import { CentralContainer } from '../../ui/CentralContainer';

export const SettingsInputPage = () => {
  const route: any = useRoute();
  const { title } = route.params;

  return (
    <Container>
      <Header title={title} hasButtonBack />
      <CentralContainer isPadding={true}>
        <Input title={title} />
      </CentralContainer>
      <Footer />
    </Container>
  );
};
