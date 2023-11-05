import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { clearAllFilters } from '../../../../redux/slices/filterSlice';
import { css } from '../../../consts';
import { Button } from '../../../ui/Button';
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

  const dispatch = useDispatch();

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
      <View style={styles.buttonsContainer}>
        <Button
          text="Clear all"
          onPress={() => dispatch(clearAllFilters())}
          border={true}
          backgroundColor={css.colors.white}
          textColor={css.colors.black}
        />
        <Button
          text="Apply"
          onPress={() => {}}
          backgroundColor={css.colors.orange}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 30,
  },
  buttonsContainer: {
    paddingTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
