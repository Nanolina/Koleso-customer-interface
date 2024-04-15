import { useRoute } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { Container } from '../components/Container';
import { EmptyHeader } from '../components/EmptyHeader';
import { Footer } from '../components/Footer';
import {
  Buttons,
  IconContainer,
  ImageContainer,
  Product,
} from '../modules/product/item';
import { IRootState } from '../redux/rootReducer';
import { CentralContainer } from '../ui/CentralContainer';

export const ProductPage: React.FC = () => {
  const route: any = useRoute();
  const { productId } = route.params;

  const { product } = useSelector((state: IRootState) => state.products);

  return (
    <Container>
      <EmptyHeader />
      <IconContainer />
      <CentralContainer isPadding={false}>
        <ImageContainer image={product.variants[0].images[0].url} />
        <CentralContainer isPadding isMinPadding>
          <Product />
        </CentralContainer>
      </CentralContainer>
      <Buttons />
      <Footer />
    </Container>
  );
};
