import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { css } from '../consts';
import { TextWithInput } from './TextWithInput';

export const Form = ({ name, city, street, house, apartment, addField }) => {
  const dispatch = useDispatch();

  return (
    <View style={styles.mainContainer}>
      <TextWithInput
        text="Surname, first name, patronymic of the recipient"
        value={name}
        onChangeText={(text) =>
          dispatch(addField({ field: 'name', value: text }))
        }
        autoComplete="name"
      />

      <TextWithInput
        text="City"
        value={city}
        onChangeText={(text) =>
          dispatch(addField({ field: 'city', value: text }))
        }
      />
      <TextWithInput
        text="Street"
        value={street}
        onChangeText={(text) =>
          dispatch(addField({ field: 'street', value: text }))
        }
        autoComplete="street-address"
      />

      <View style={styles.container}>
        <TextWithInput
          text="House number"
          value={house}
          onChangeText={(text) =>
            dispatch(addField({ field: 'house', value: text }))
          }
          width="45%"
        />
        <TextWithInput
          text="Apartment number"
          value={apartment}
          onChangeText={(text) =>
            dispatch(addField({ field: 'apartment', value: text }))
          }
          width="45%"
        />
      </View>
    </View>
  );
};

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
