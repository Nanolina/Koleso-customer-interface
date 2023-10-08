import React from 'react';
import { FlatList } from 'react-native';

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
    />
  );
};
