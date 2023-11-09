import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { sizes } from '../../../../consts';
import { IQRCodeSectionProps } from '../../types';
import { QRCode } from '../../ui/QRCode/QRCode';

export const QRCodeSection: React.FC<IQRCodeSectionProps> = React.memo(
  ({ code }) => (
    <View style={styles.container}>
      <QRCode />
      <Text style={styles.text}>code: {code}</Text>
    </View>
  )
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    gap: 5,
  },
  text: {
    fontSize: sizes.text12,
    textAlign: 'left',
    fontWeight: 'bold',
  },
});
