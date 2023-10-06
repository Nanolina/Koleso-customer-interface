import React from 'react';
import { FlatList, StyleSheet } from 'react-native';

import { css } from '../../../consts';
import { data } from '../data';
import { SortComponent } from './SortComponent';

export const SortComponents: React.FC = () => {
  return (
    <FlatList
      data={data}
      renderItem={({ item }) => (
        <SortComponent image={item.image} title={item.title} />
      )}
      keyExtractor={(item) => item.id}
      style={styles.container}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: css.padding,
    width: '100%',
  },
});
