import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useSelector } from 'react-redux';
import { css } from '../../../consts';
import { data } from '../data';
import { Row } from './Row';

export const Settings: React.FC = () => {
  const { gender } = useSelector((state: any) => state.settings);

  return (
    <View style={styles.container}>
      <Row items={data.genders} title="Gender" selectedItem={gender} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: css.padding,
    paddingVertical: css.padding,
  },
});
