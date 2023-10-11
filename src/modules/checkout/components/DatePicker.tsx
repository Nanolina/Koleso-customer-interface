import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {
  DatePickerInput,
  enGB,
  registerTranslation,
} from 'react-native-paper-dates';
import { css } from '../../../consts';
import { minDate } from '../consts';

registerTranslation('en-GB', enGB);

export const DatePicker = ({ value, onChange, width }: any) => {
  const styles = getStyles(width);

  const validRange = React.useMemo(() => {
    return {
      startDate: minDate,
    };
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Date for delivery</Text>

      <DatePickerInput
        locale="en-GB"
        value={new Date(value)}
        onChange={onChange}
        inputMode="start"
        style={styles.input}
        iconColor={css.colors.main}
        animationType="fade"
        validRange={validRange}
      />
    </View>
  );
};

const getStyles = (width) =>
  StyleSheet.create({
    container: {
      gap: 10,
      width: width || '100%',
    },
    input: {
      borderRadius: css.borderRadiusMin,
      fontSize: css.size.text16,
      color: css.colors.black,
      height: 50,
      backgroundColor: css.colors.white,
    },
    text: {
      fontSize: css.size.text16,
      fontWeight: 'bold',
      textAlign: 'center',
    },
  });
