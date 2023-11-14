import React, { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { StyleSheet, Text, View } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import { colors, css, sizes } from '../../../consts';
import { ITimePickerProps } from '../types';

export const TimePicker: React.FC<ITimePickerProps> = React.memo(
  ({ text, value, onChange, width }) => {
    const { t } = useTranslation('translation', {
      keyPrefix: 'orderProcessing',
    });

    const styles = useMemo(() => getStyles(width), [width]);

    return (
      <View style={styles.container}>
        <Text style={styles.text}>{t('time')}</Text>

        <View style={styles.picker}>
          {/* <RNPickerSelect
            value={value}
            onValueChange={onChange}
            placeholder={{ label: 'Anytime', value: 'Anytime' }}
            items={timeFramesDelivery}
          /> */}
        </View>
      </View>
    );
  }
);

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
      fontSize: sizes.text16,
      height: 50,
      paddingHorizontal: 15,
      justifyContent: 'center',
      alignItems: 'center',
    },
    text: {
      fontSize: sizes.text16,
      fontWeight: 'bold',
      textAlign: 'center',
    },
  });
