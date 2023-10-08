import React from 'react';
import { FlatList } from 'react-native';

import { useSelector } from 'react-redux';
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
    />
  );
};
