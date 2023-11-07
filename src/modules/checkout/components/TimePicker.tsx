import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import { colors, css, timeFramesDelivery } from '../../../consts';

export const TimePicker = ({ text, value, onChange, width }) => {
  const styles = getStyles(width);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{text}</Text>

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
      backgroundColor: colors.lightGray,
      borderRadius: css.borderRadiusMin,
      fontSize: css.size.text16,
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
