import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { css } from '../consts';
import { Gradient } from './Gradient';

export const CheckboxItem = ({ item, isSelected, onToggle }: any) => (
  <TouchableOpacity style={styles.item} onPress={onToggle}>
    {isSelected ? (
      <Gradient style={styles.gradient}>
        <Text style={styles.check}>✓</Text>
      </Gradient>
    ) : (
      <View style={styles.checkbox}></View>
    )}
    <Text style={styles.text}>{item}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
    gap: 10,
  },
  checkbox: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: css.colors.lightGray,
    ...css.filter.checkbox,
  },
  gradient: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 0,
    ...css.filter.checkbox,
  },
  check: {
    fontSize: css.size.text15,
    fontWeight: 'bold',
  },
  text: {
    fontSize: css.size.text16,
    fontWeight: 'bold',
  },
});
