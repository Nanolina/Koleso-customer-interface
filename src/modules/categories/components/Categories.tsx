import React from 'react';
import { FlatList, Platform, StyleSheet } from 'react-native';

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
      numColumns={Platform.OS === 'web' ? 5 : 3}
      style={styles.container}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: Platform.OS === 'web' ? css.paddingWeb : 0,
    paddingHorizontal: css.padding,
    width: '100%',
  },
});
