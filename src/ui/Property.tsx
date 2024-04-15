import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { sizes } from '../consts';
import { IPropertyProps } from '../modules/product/item/types';

export const Property: React.FC<IPropertyProps> = React.memo(
  ({ label, text }) => {
    return (
      <Text style={styles.text}>
        <Text style={styles.label}>{label}:</Text> {text}
      </Text>
    );
  }
);

const styles = StyleSheet.create({
  text: {
    fontSize: sizes.text16,
  },
  label: {
    fontWeight: 'bold',
  },
});
