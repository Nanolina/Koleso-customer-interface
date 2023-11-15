import React from 'react';
import { useTranslation } from 'react-i18next';
import { StyleSheet, Text } from 'react-native';
import { colors } from '../../../consts';
import { IBottomTextProps } from '../types';

export const BottomText: React.FC<IBottomTextProps> = React.memo(
  ({ statusMoney }) => {
    const { t } = useTranslation();

    return statusMoney === 'sent' ? (
      <Text style={styles.green}>{t('returns.sent')}</Text>
    ) : (
      <Text style={styles.red}>{t('returns.notSent')}</Text>
    );
  }
);

const styles = StyleSheet.create({
  green: {
    fontWeight: 'bold',
    color: colors.green,
  },
  red: {
    fontWeight: 'bold',
    color: colors.darkRed,
  },
});
