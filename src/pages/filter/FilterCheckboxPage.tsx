import { useRoute } from '@react-navigation/native';
import { Container } from '../../components/Container';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { CheckboxList } from '../../modules/filter';
import { CentralContainer } from '../../ui/CentralContainer';

export const FilterCheckboxPage = () => {
  const route: any = useRoute();
  const { title, items } = route.params;

  return (
    <Container>
      <Header title={title} hasButtonBack />
      <CentralContainer isPadding={true}>
        <CheckboxList title={title} items={items} />
      </CentralContainer>
      <Footer />
    </Container>
  );
};
