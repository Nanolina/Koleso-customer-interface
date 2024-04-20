import { useRoute } from '@react-navigation/native';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container } from '../components/Container';
import { EmptyHeader } from '../components/EmptyHeader';
import { Footer } from '../components/Footer';
import {
  Buttons,
  IImagesWith1Color,
  IconContainer,
  ImageContainer,
  Product,
  ThumbnailBar,
} from '../modules/product';
import { IRootState } from '../redux/rootReducer';
import { setSelectedImagesWith1Color } from '../redux/slices/productsSlice';
import { AppDispatch } from '../redux/store';
import { CentralContainer } from '../ui/CentralContainer';

export const ProductPage: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const route: any = useRoute();
  const { productId } = route.params;

  const {
    items: colorsWithImagesItems,
    selectedColor,
    selectedImagesWith1Color,
  } = useSelector(
    (state: IRootState) => state.products.product.colorsWithImages
  );

  useEffect(() => {
    if (colorsWithImagesItems.length) {
      const selectedColorWithImages: IImagesWith1Color =
        colorsWithImagesItems.find(
          (imagesWith1Color) => imagesWith1Color.color === selectedColor
        );

      if (selectedColorWithImages?.color) {
        dispatch(setSelectedImagesWith1Color(selectedColorWithImages));
      }
    }
  }, [colorsWithImagesItems, selectedColor]);

  return (
    <Container>
      <EmptyHeader />
      <IconContainer />
      <CentralContainer isPadding={false}>
        {colorsWithImagesItems.length > 0 &&
          selectedImagesWith1Color.images.length > 0 && (
            <>
              <ImageContainer />
              <ThumbnailBar />
            </>
          )}
        <CentralContainer isPadding isMinPadding>
          <Product />
        </CentralContainer>
      </CentralContainer>
      <Buttons />
      <Footer />
    </Container>
  );
};
