import { useRoute } from '@react-navigation/native';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container } from '../components/Container';
import { EmptyHeader } from '../components/EmptyHeader';
import { Footer } from '../components/Footer';
import {
  IColorGroup,
  IVariant,
  ProductButtons,
  ProductDetails,
  ProductIconsContainer,
  ProductImageContainer,
} from '../modules/product';
import { IRootState } from '../redux/rootReducer';
import { setSelectedColorGroup } from '../redux/slices/productsSlice';
import { AppDispatch } from '../redux/store';
import { CentralContainer } from '../ui/CentralContainer';

export const ProductPage: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const route: any = useRoute();
  const { productId } = route.params;

  const { colorGroups, selectedColorGroup, selectedColor } = useSelector(
    (state: IRootState) => state.products.product.colorPalette
  );
  const { variants } = useSelector(
    (state: IRootState) => state.products.product
  );

  const isColorGroups =
    colorGroups.length > 0 && selectedColorGroup.images.length > 0;

  const selectedVariant = variants.find((variant: IVariant) => {
    const isColorMatch = variant.color === selectedColorGroup.color;
    const isSizeMatch = variant.size
      ? variant.size === selectedColorGroup.selectedSize
      : true;

    return isColorMatch && isSizeMatch;
  });

  useEffect(() => {
    if (colorGroups.length) {
      const activeColorGroup: IColorGroup = colorGroups.find(
        (colorGroup) => colorGroup.color === selectedColor
      );

      if (activeColorGroup?.color) {
        dispatch(setSelectedColorGroup(activeColorGroup));
      }
    }
  }, [colorGroups, selectedColor]);

  return (
    <Container>
      <EmptyHeader />
      <ProductIconsContainer />
      <CentralContainer isPadding={false}>
        {isColorGroups && <ProductImageContainer />}
        <CentralContainer isPadding isMinPadding>
          {isColorGroups && <ProductDetails />}
        </CentralContainer>
      </CentralContainer>
      <ProductButtons productId={productId} variantId={selectedVariant?.id} />
      <Footer />
    </Container>
  );
};
