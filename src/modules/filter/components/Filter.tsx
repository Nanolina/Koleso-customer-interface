import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useSelector } from 'react-redux';
import { data } from '../data';
import { Row } from './Row';
import { RowRange } from './RowRange';
import { css } from '../../../consts';

export const Filter = () => {
  const { colors, genders } = useSelector((state: any) => state.filter);

  return (
    <View style={styles.container}>
      <Row items={data.colors} title="Colors" selectedItems={colors} />
      <Row items={data.genders} title="Gender" selectedItems={genders} />
      <RowRange title="Age" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: css.padding,
    paddingVertical: css.padding,
    gap: 20,
  },
});
