import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { colors, sizes } from '../consts';
import { IPropertyProps } from '../types';

export const Property: React.FC<IPropertyProps> = React.memo(
  ({ label, text }) => {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>
          <Text style={styles.label}>{label}:</Text> {text}
        </Text>
      </View>
    );
  }
);

const styles = StyleSheet.create({
  container: {
    paddingBottom: 10,
  },
  text: {
    fontSize: sizes.text16,
  },
  label: {
    color: colors.darkGray,
  },
});
