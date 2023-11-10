import React, { useCallback } from 'react';
import { StyleSheet, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../../redux/rootReducer';
import { addField } from '../../../../redux/slices/checkoutSlice';
import { TextWithInput } from '../../../components/TextWithInput';
import { css } from '../../../consts';

export const Form: React.FC = React.memo(() => {
  const dispatch = useDispatch();

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
        text="Surname, first name, patronymic of the recipient"
        value={name}
        onChangeText={handleNameChange}
        autoComplete="name"
      />

      <TextWithInput text="City" value={city} onChangeText={handleCityChange} />
      <TextWithInput
        text="Street"
        value={street}
        onChangeText={handleStreetChange}
        autoComplete="street-address"
      />

      <View style={styles.container}>
        <TextWithInput
          text="House number"
          value={house}
          onChangeText={handleHouseChange}
          width="45%"
        />
        <TextWithInput
          text="Apartment number"
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
