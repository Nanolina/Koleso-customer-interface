import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { IDetailProps } from '../types';

export const Detail: React.FC<IDetailProps> = React.memo(({ name, detail }) => {
  return (
    <Text>
      {name}: <Text style={styles.text}>{detail}</Text>
    </Text>
  );
});

const styles = StyleSheet.create({
  text: {
    fontWeight: 'bold',
  },
});
