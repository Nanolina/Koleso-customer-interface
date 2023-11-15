import React from 'react';
import { useTranslation } from 'react-i18next';
import { StyleSheet, Text, View } from 'react-native';
import { sizes } from '../../../consts';
import { getFromToFunctions } from '../functions';
import { IRowRangeProps } from '../types';
import { Range } from './Range';

export const RowRange: React.FC<IRowRangeProps> = React.memo(
  ({ title, displayTitle, from, to }) => {
    const { t } = useTranslation('translation', { keyPrefix: 'filter' });

    const { addFrom, addTo } = getFromToFunctions(title);

    return (
      <View style={styles.container}>
        <Text style={styles.text}>{displayTitle}</Text>
        <View style={styles.right}>
          <Range
            text={t('from')}
            value={from === null ? '' : String(from)}
            onChangeText={addFrom}
          />
          <Range
            text={t('to')}
            value={to === null ? '' : String(to)}
            onChangeText={addTo}
          />
        </View>
      </View>
    );
  }
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  text: {
    fontSize: sizes.text16,
    fontWeight: 'bold',
  },
  right: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
  },
});
