import { useRoute } from '@react-navigation/native';
import { Container } from '../../components/Container';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { CentralContainer } from '../../ui/CentralContainer';
import { Wheather } from '../../modules/filter';

export const FilterWheatherPage = () => {
  const route: any = useRoute();
  const { title } = route.params;

  return (
    <Container>
      <Header title={title} />
      <CentralContainer isPadding={true}>
        <Wheather />
      </CentralContainer>
      <Footer />
    </Container>
  );
};
