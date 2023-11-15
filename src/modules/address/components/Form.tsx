import React, { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { StyleSheet, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../../redux/rootReducer';
import { addField } from '../../../../redux/slices/checkoutSlice';
import { TextWithInput } from '../../../components/TextWithInput';
import { css } from '../../../consts';

export const Form: React.FC = React.memo(() => {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const { name, city, street, house, apartment } = useSelector(
    (state: RootState) => state.checkout
  );

  const handleNameChange = useCallback(
    (text: string) => dispatch(addField({ field: 'name', value: text })),
    [dispatch, addField]
  );

  const handleCityChange = useCallback(
    (text: string) => dispatch(addField({ field: 'city', value: text })),
    [dispatch, addField]
  );

  const handleStreetChange = useCallback(
    (text: string) => dispatch(addField({ field: 'street', value: text })),
    [dispatch, addField]
  );

  const handleHouseChange = useCallback(
    (text: string) => dispatch(addField({ field: 'house', value: text })),
    [dispatch, addField]
  );

  const handleApartmentChange = useCallback(
    (text: string) => dispatch(addField({ field: 'apartment', value: text })),
    [dispatch, addField]
  );

  return (
    <View style={styles.mainContainer}>
      <TextWithInput
        text={t('address.surname')}
        value={name}
        onChangeText={handleNameChange}
        autoComplete="name"
      />

      <TextWithInput
        text={t('address.city')}
        value={city}
        onChangeText={handleCityChange}
      />
      <TextWithInput
        text={t('address.street')}
        value={street}
        onChangeText={handleStreetChange}
        autoComplete="street-address"
      />

      <View style={styles.container}>
        <TextWithInput
          text={t('address.houseNumber')}
          value={house}
          onChangeText={handleHouseChange}
          width="45%"
        />
        <TextWithInput
          text={t('address.apartmentNumber')}
          value={apartment}
          onChangeText={handleApartmentChange}
          width="45%"
        />
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  mainContainer: {
    gap: 10,
    paddingTop: css.paddingTop,
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
