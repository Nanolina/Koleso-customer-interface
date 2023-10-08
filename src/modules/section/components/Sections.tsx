import React from 'react';
import { FlatList } from 'react-native';
import { catalog } from '../../../../catalog';
import { Section } from './Section';

export const Sections: React.FC = () => {
  return (
    <FlatList
      data={catalog}
      renderItem={({ item }) => <Section section={item} />}
      keyExtractor={(item) => item.id}
    />
  );
};
