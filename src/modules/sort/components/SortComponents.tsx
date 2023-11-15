import React from 'react';
import { FlatList } from 'react-native';
import { CardItem } from '../../../components/CardItem';
import { data } from '../data';
import { ISortItemProps } from '../types';

export const SortComponents: React.FC = () => {
  return (
    <FlatList
      data={data}
      renderItem={({ item }) => (
        <CardItem
          image={item.image}
          title={item.title}
          onPress={() => {}}
          translationKey="sort"
        />
      )}
      keyExtractor={(item: ISortItemProps) => item.id}
    />
  );
};
