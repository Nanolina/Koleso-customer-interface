import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useSelector } from 'react-redux';
import { Row } from '../../../components/Row';
import { colors as commonColors, css } from '../../../consts';
import { Button } from '../../../ui/Button';
import { data } from '../data';
import { ResetAll } from '../ui/ResetAll';
import { RowRange } from './RowRange';

export const Filter: React.FC = () => {
  const {
    colors,
    genders,
    sizes,
    categories,
    brands,
    sellers,
    compositions,

    seasons,
    // From-To
    ageFrom,
    ageTo,
    priceFrom,
    priceTo,
  } = useSelector((state: any) => state.filter);

  return (
    <View style={styles.container}>
      <ResetAll />

      <Row
        items={data.colors}
        title="Color"
        selectedItems={colors}
        navigateTo="FilterCheckboxPage"
      />
      <Row
        items={data.genders}
        title="Gender"
        selectedItems={genders}
        navigateTo="FilterCheckboxPage"
      />
      <Row
        items={data.sizes}
        title="Size"
        selectedItems={sizes}
        navigateTo="FilterCheckboxPage"
      />
      <Row
        items={data.categories}
        title="Category"
        selectedItems={categories}
        navigateTo="FilterCheckboxPage"
      />
      <Row
        items={data.brands}
        title="Brand"
        selectedItems={brands}
        navigateTo="FilterCheckboxPage"
      />
      <Row
        items={data.sellers}
        title="Seller"
        selectedItems={sellers}
        navigateTo="FilterCheckboxPage"
      />
      <Row
        items={data.compositions}
        title="Composition"
        selectedItems={compositions}
        navigateTo="FilterCheckboxPage"
      />
      <RowRange title="Age" from={ageFrom} to={ageTo} />
      <RowRange title="Price" from={priceFrom} to={priceTo} />
      <Row
        items={data.seasons}
        title="Season"
        selectedItems={seasons}
        navigateTo="FilterCheckboxPage"
      />
      <View style={styles.buttonsContainer}>
        <Button
          text="Apply"
          onPress={() => {}}
          backgroundColor={commonColors.orange}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 25,
    paddingBottom: css.paddingBottom,
  },
  buttonsContainer: {
    paddingTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
