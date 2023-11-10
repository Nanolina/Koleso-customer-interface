import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { colors } from '../../../consts';
import { IBottomTextProps } from '../types';

export const BottomText: React.FC<IBottomTextProps> = React.memo(
  ({ statusMoney }) => {
    return statusMoney === 'sent' ? (
      <Text style={styles.green}>The money has been sent</Text>
    ) : (
      <Text style={styles.red}>The money hasn't been sent yet</Text>
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
