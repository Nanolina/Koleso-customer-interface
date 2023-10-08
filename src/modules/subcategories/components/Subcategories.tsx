import React from 'react';
import { FlatList } from 'react-native';

import { useSelector } from 'react-redux';
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
    />
  );
};
