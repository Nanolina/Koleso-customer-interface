import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { colors, css, sizes } from '../consts';

export const CheckboxItem = ({
  item,
  isSelected,
  onToggle,
  styleText,
}: any) => {
  return (
    <TouchableOpacity style={styles.item} onPress={onToggle}>
      {isSelected ? (
        <View style={styles.checkbox}>
          <Text style={styles.check}>✓</Text>
        </View>
      ) : (
        <View style={styles.checkboxEmpty}></View>
      )}
      <Text style={styleText || styles.text}>{item}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  item: {
    marginTop: -10,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
    gap: 10,
  },
  checkbox: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.main,
    ...css.filter.checkbox,
  },
  checkboxEmpty: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.lightGray,
    ...css.filter.checkbox,
  },
  check: {
    fontSize: sizes.text15,
    fontWeight: 'bold',
    color: colors.main,
  },
  text: {
    fontSize: sizes.text16,
    fontWeight: 'bold',
    flexShrink: 1,
    flexWrap: 'wrap',
  },
});
