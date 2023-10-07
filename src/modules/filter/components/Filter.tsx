import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useSelector } from 'react-redux';
import { css } from '../../../consts';
import { data } from '../data';
import { Row } from './Row';
import { RowRange } from './RowRange';

export const Filter = () => {
  const {
    colors,
    genders,
    sizes,
    categories,
    brands,
    sellers,
    compositions,

    // From-To
    ageFrom,
    ageTo,
    priceFrom,
    priceTo,
  } = useSelector((state: any) => state.filter);

  return (
    <View style={styles.container}>
      <Row items={data.colors} title="Color" selectedItems={colors} />
      <Row items={data.genders} title="Gender" selectedItems={genders} />
      <Row items={data.sizes} title="Size" selectedItems={sizes} />
      <Row
        items={data.categories}
        title="Category"
        selectedItems={categories}
      />
      <Row items={data.brands} title="Brand" selectedItems={brands} />
      <Row items={data.sellers} title="Seller" selectedItems={sellers} />
      <Row
        items={data.compositions}
        title="Composition"
        selectedItems={compositions}
      />
      <RowRange title="Age" from={ageFrom} to={ageTo} />
      <RowRange title="Price" from={priceFrom} to={priceTo} />
      <Row title="Wheather" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: css.padding,
    paddingVertical: css.padding,
    gap: 20,
  },
});
