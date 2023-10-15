import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {
  DatePickerInput,
  enGB,
  registerTranslation,
} from 'react-native-paper-dates';
import { css } from '../consts';

registerTranslation('en-GB', enGB);

export const DatePicker = ({
  text,
  value,
  onChange,
  width,
  validRange,
}: any) => {
  const styles = getStyles(width);

  return (
    <View style={styles.container}>
      {text && <Text style={styles.text}>{text}</Text>}

      <DatePickerInput
        locale="en-GB"
        value={value ? new Date(value) : undefined}
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
      fontSize: css.size.text18,
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
