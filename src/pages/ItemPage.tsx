import { useRoute } from '@react-navigation/native';
import { Container } from '../components/Container';
import { EmptyHeader } from '../components/EmptyHeader';
import { Footer } from '../components/Footer';
import { IconContainer, ImageContainer, Item } from '../modules/item';
import { CentralContainer } from '../ui/CentralContainer';

export const ItemPage = () => {
  const route: any = useRoute();
  const { item } = route.params;

  return (
    <Container>
      <EmptyHeader />
      <IconContainer />
      <CentralContainer isPadding={false}>
        <ImageContainer image={item.image} />
        <Item item={item} />
      </CentralContainer>
      <Footer />
    </Container>
  );
};
