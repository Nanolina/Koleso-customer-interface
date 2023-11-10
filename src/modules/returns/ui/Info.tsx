import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { sizes } from '../../../consts';
import { IInfoProps } from '../types';

export const Info: React.FC<IInfoProps> = React.memo(({ text, info }) => {
  return (
    <Text style={styles.italic}>
      {text}: <Text style={styles.bold}>{info}</Text>
    </Text>
  );
});

const styles = StyleSheet.create({
  italic: {
    fontSize: sizes.text15,
    fontStyle: 'italic',
    textAlign: 'left',
  },
  bold: {
    fontWeight: 'bold',
  },
});
