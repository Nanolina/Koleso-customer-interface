import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { css } from '../consts';

export const CheckboxItem = ({ item, isSelected, onToggle }: any) => (
  <TouchableOpacity style={styles.item} onPress={onToggle}>
    {isSelected ? (
      <View style={styles.checkbox}>
        <Text style={styles.check}>✓</Text>
      </View>
    ) : (
      <View style={styles.checkboxEmpty}></View>
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
    backgroundColor: css.colors.main,
    ...css.filter.checkbox,
  },
  checkboxEmpty: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: css.colors.lightGray,
    ...css.filter.checkbox,
  },
  check: {
    fontSize: css.size.text15,
    fontWeight: 'bold',
    color: css.colors.white,
  },
  text: {
    fontSize: css.size.text16,
    fontWeight: 'bold',
  },
});
