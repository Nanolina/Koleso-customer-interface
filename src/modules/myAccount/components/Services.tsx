import React from 'react';
import { FlatList } from 'react-native';
import { services } from '../consts';
import { Service } from './Service';

export const Services: React.FC = () => {
  return (
    <FlatList
      data={services}
      renderItem={({ item }) => <Service service={item} />}
      keyExtractor={(item) => item.id}
    />
  );
};
