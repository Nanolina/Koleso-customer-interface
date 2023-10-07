import React from 'react';
import { View } from 'react-native';
import { useSelector } from 'react-redux';
import { data } from '../data';
import { Row } from './Row';

export const Filter = () => {
  const { colors, genders } = useSelector((state: any) => state.filter);

  return (
    <View>
      <Row items={data.colors} title="Colors" selectedItems={colors} />
      <Row items={data.genders} title="Gender" selectedItems={genders} />
    </View>
  );
};
