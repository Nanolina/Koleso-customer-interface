import React from 'react';
import { useTranslation } from 'react-i18next';
import { StyleSheet, Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import { sizes } from '../../../../consts';
import { IRootState } from '../../../../redux/rootReducer';
import { Property } from '../../../../ui/Property';
import { PriceContainer } from '../../../price';
import { IComposition } from '../../types';
import { Description } from './Description';
import { ProductTitleContainer } from './ProductTitleContainer';
import { SizeContainer } from './SizeContainer';
import { ThumbnailBar } from './ThubnailBar';

export const ProductDetails: React.FC = () => {
  const { t } = useTranslation();

  const { gender, name, store, description, brand, model, composition } =
    useSelector((state: IRootState) => state.products.product);

  const { selectedColor, selectedColorGroup } = useSelector(
    (state: IRootState) => state.products.product.colorPalette
  );

  return (
    <>
      <PriceContainer
        priceSize={sizes.title}
        finalPrice={selectedColorGroup.finalPrice}
        priceWithoutDiscount={selectedColorGroup.priceWithoutDiscount}
      />
      <ProductTitleContainer title={name} seller={store.name} />
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
      {composition &&
        composition.map((material: IComposition) => (
          <View key={material.title}>
            <Text style={styles.label}>{t('filter.Composition.label')}:</Text>
            <Property
              label={t(`filter.Composition.${material.title}`)}
              text={material.percentage}
            />
          </View>
        ))}
      {description && (
        <>
          <Text style={styles.label}>{t('product.description')}:</Text>
          <Description />
        </>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  label: {
    fontSize: sizes.text16,
    fontWeight: '600',
    paddingTop: 10,
  },
});
