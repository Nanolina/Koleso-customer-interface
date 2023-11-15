import React from 'react';
import { useTranslation } from 'react-i18next';
import { StyleSheet, View } from 'react-native';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../redux/rootReducer';
import { Row } from '../../../components/Row';
import { colors as commonColors, css } from '../../../consts';
import { Button } from '../../../ui/Button';
import { data } from '../data';
import { ResetAll } from '../ui/ResetAll';
import { RowRange } from './RowRange';

export const Filter: React.FC = () => {
  const { t } = useTranslation();

  const {
    colors,
    genders,
    sizes,
    brands,
    sellers,
    compositions,

    seasons,
    // From-To
    ageFrom,
    ageTo,
    priceFrom,
    priceTo,
  } = useSelector((state: RootState) => state.filter);

  return (
    <View style={styles.container}>
      <ResetAll />

      <Row
        items={data.colors}
        title="Color"
        displayTitle={t('filter.Color.label')}
        selectedItems={colors}
        navigateTo="FilterCheckboxPage"
      />
      <Row
        items={data.genders}
        title="Gender"
        displayTitle={t('filter.Gender.label')}
        selectedItems={genders}
        navigateTo="FilterCheckboxPage"
      />
      <Row
        items={data.sizes}
        title="Size"
        displayTitle={t('filter.Size')}
        selectedItems={sizes}
        navigateTo="FilterCheckboxPage"
      />
      <Row
        items={data.brands}
        title="Brand"
        displayTitle={t('filter.Brand')}
        selectedItems={brands}
        navigateTo="FilterCheckboxPage"
      />
      <Row
        items={data.sellers}
        title="Seller"
        displayTitle={t('filter.Seller')}
        selectedItems={sellers}
        navigateTo="FilterCheckboxPage"
      />
      <Row
        items={data.compositions}
        title="Composition"
        displayTitle={t('filter.Composition')}
        selectedItems={compositions}
        navigateTo="FilterCheckboxPage"
      />
      <RowRange
        title="Age"
        displayTitle={t('filter.Age')}
        from={ageFrom}
        to={ageTo}
      />
      <RowRange
        title="Price"
        displayTitle={t('filter.Price')}
        from={priceFrom}
        to={priceTo}
      />
      <Row
        items={data.seasons}
        title="Season"
        displayTitle={t('filter.Season')}
        selectedItems={seasons}
        navigateTo="FilterCheckboxPage"
      />
      <View style={styles.buttonsContainer}>
        <Button
          text={t('apply')}
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
