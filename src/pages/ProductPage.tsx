import { useRoute } from '@react-navigation/native';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Container } from '../components/Container';
import { EmptyHeader } from '../components/EmptyHeader';
import { Footer } from '../components/Footer';
import { sizes } from '../consts';
import { PriceContainer } from '../modules/price';
import {
  Buttons,
  Description,
  IColorGroup,
  IComposition,
  IconContainer,
  ImageContainer,
  Product,
  SizeContainer,
  ThumbnailBar,
  TitleContainer,
} from '../modules/product';
import { IRootState } from '../redux/rootReducer';
import { setSelectedColorGroup } from '../redux/slices/productsSlice';
import { AppDispatch } from '../redux/store';
import { CentralContainer } from '../ui/CentralContainer';
import { Property } from '../ui/Property';

export const ProductPage: React.FC = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch<AppDispatch>();
  const route: any = useRoute();
  const { productId } = route.params;

  const { gender, name, store, description, brand, model, composition } =
    useSelector((state: IRootState) => state.products.product);

  const { colorGroups, selectedColor, selectedColorGroup } = useSelector(
    (state: IRootState) => state.products.product.colorPalette
  );

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
      <IconContainer />
      <CentralContainer isPadding={false}>
        {colorGroups.length > 0 && selectedColorGroup.images.length > 0 && (
          <>
            <ImageContainer />
            <PriceContainer
              priceSize={sizes.title}
              finalPrice={selectedColorGroup.finalPrice}
              priceWithoutDiscount={selectedColorGroup.priceWithoutDiscount}
            />
            <TitleContainer title={name} seller={store.name} />
            <ThumbnailBar />
            <SizeContainer />
            {selectedColorGroup.articleKoleso && (
              <Property
                label={t('product.article')}
                text={selectedColorGroup.articleKoleso}
              />
            )}
            {selectedColor && (
              <Property
                label={t('filter.Color.label')}
                text={t(`filter.Color.${selectedColor}`)}
              />
            )}
            {gender && (
              <Property
                label={t('filter.Gender.label')}
                text={t(`filter.Gender.${gender}`)}
              />
            )}
            {brand && <Property label={t('filter.Brand')} text={brand} />}
            {model && <Property label={t('filter.Model')} text={model} />}
            {description && <Description />}
            {composition &&
              composition.map((material: IComposition) => (
                <>
                  <Text>{t('filter.Composition.label')}</Text>
                  <Property
                    label={t(`filter.Composition.${material.title}`)}
                    text={material.percentage}
                  />
                </>
              ))}
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
