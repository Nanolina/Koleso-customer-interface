import React from 'react';
import { FlatList, StyleSheet } from 'react-native';

import { useSelector } from 'react-redux';
import { css } from '../../../consts';
import { Category } from './Category';

export const Categories: React.FC = () => {
  const categories = useSelector(
    (state: any) => state.catalog.section.categories
  );

  return (
    <FlatList
      data={categories}
      renderItem={({ item }) => <Category category={item} />}
      keyExtractor={(item) => item.id}
      style={styles.container}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 0,
    paddingHorizontal: css.padding,
    width: '100%',
  },
});
