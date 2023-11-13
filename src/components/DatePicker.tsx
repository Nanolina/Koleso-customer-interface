import React, { useMemo } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {
  DatePickerInput,
  enGB,
  registerTranslation,
  ru,
} from 'react-native-paper-dates';
import i18n from '../../i18n/i18n';
import { colors, css, sizes } from '../consts';
import { IDatePickerProps } from '../types';

registerTranslation('en-GB', enGB);
registerTranslation('ru', ru);

export const DatePicker: React.FC<IDatePickerProps> = React.memo(
  ({ text, value, onChange, width, validRange }) => {
    const styles = useMemo(() => getStyles(width), [width]);

    const locale = i18n.language === 'Russian' ? 'ru' : 'en-GB';

    return (
      <View style={styles.container}>
        {text && <Text style={styles.text}>{text}</Text>}

        <DatePickerInput
          locale={locale}
          value={value ? new Date(value) : undefined}
          onChange={onChange}
          inputMode="start"
          style={styles.input}
          iconColor={colors.main}
          animationType="fade"
          validRange={validRange}
        />
      </View>
    );
  }
);

const getStyles = (width) =>
  StyleSheet.create({
    container: {
      gap: 10,
      width: width || '100%',
    },
    input: {
      borderRadius: css.borderRadiusMin,
      fontSize: sizes.text18,
      color: colors.black,
      height: 50,
      backgroundColor: colors.white,
    },
    text: {
      fontSize: sizes.text16,
      fontWeight: 'bold',
      textAlign: 'center',
    },
  });
