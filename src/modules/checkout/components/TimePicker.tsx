import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import { css, timeFramesDelivery } from '../../../consts';

export const TimePicker = ({ value, onChange, width }) => {
  const styles = getStyles(width);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Delivery time</Text>

      <View style={styles.picker}>
        <RNPickerSelect
          value={value}
          onValueChange={onChange}
          placeholder={{ label: 'Anytime', value: 'Anytime' }}
          items={timeFramesDelivery}
        />
      </View>
    </View>
  );
};

const getStyles = (width) =>
  StyleSheet.create({
    container: {
      gap: 10,
      width: width || '100%',
      justifyContent: 'center',
    },
    picker: {
      borderWidth: 1,
      borderColor: css.colors.main,
      borderRadius: css.borderRadiusMin,
      fontSize: css.size.text16,
      color: css.colors.black,
      height: 50,
      paddingHorizontal: 15,
      justifyContent: 'center',
      alignItems: 'center',
    },
    text: {
      fontSize: css.size.text16,
      fontWeight: 'bold',
      textAlign: 'center',
    },
  });
