import { useRoute } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Container } from '../components/Container';
import { EmptyHeader } from '../components/EmptyHeader';
import { Footer } from '../components/Footer';
import {
  Buttons,
  IconContainer,
  ImageContainer,
  Product,
} from '../modules/product';
import { IRootState } from '../redux/rootReducer';
import { CentralContainer } from '../ui/CentralContainer';

export const ProductPage: React.FC = () => {
  const route: any = useRoute();
  const { productId } = route.params;

  const { product } = useSelector((state: IRootState) => state.products);

  const [images, setImages] = useState([]);

  useEffect(() => {
    if (product && product.variants) {
      const imageSet = new Set();
      product.variants.forEach((variant) => {
        variant.images.forEach((image) => {
          imageSet.add(image.url);
        });
      });
      setImages(Array.from(imageSet));
    }
  }, [product]);

  return (
    <Container>
      <EmptyHeader />
      <IconContainer />
      <CentralContainer isPadding={false}>
        <ImageContainer images={product.variants[0].images} />
        <CentralContainer isPadding isMinPadding>
          <Product />
        </CentralContainer>
      </CentralContainer>
      <Buttons />
      <Footer />
    </Container>
  );
};
