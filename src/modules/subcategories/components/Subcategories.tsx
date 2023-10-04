import React from 'react';
import { FlatList, StyleSheet } from 'react-native';

import { useSelector } from 'react-redux';
import { css } from '../../../consts';
import { Subcategory } from './Subcategory';

export const Subcategories: React.FC = () => {
  const subcategories = useSelector(
    (state: any) => state.catalog.category.subcategories
  );

  return (
    <FlatList
      data={subcategories}
      renderItem={({ item }) => <Subcategory subcategory={item} />}
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
