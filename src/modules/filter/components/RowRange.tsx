import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { sizes } from '../../../consts';
import { getFromToFunctions } from '../functions';
import { Range } from './Range';

export const RowRange = ({ title, from, to }) => {
  const { addFrom, addTo } = getFromToFunctions(title);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{title}</Text>
      <View style={styles.right}>
        <Range text="From" value={from} onChangeText={addFrom} />
        <Range text="To" value={to} onChangeText={addTo} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  text: {
    fontSize: sizes.text20,
    fontWeight: 'bold',
  },
  right: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
  },
});
