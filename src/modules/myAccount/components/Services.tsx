import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from '@react-navigation/native';
import React from 'react';
import { FlatList } from 'react-native';
import { CardItem } from '../../../components/CardItem';
import { services } from '../consts';

export const Services: React.FC = () => {
  const navigation: NavigationProp<ParamListBase> = useNavigation();

  return (
    <FlatList
      data={services}
      renderItem={({ item }) => (
        <CardItem
          image={item.image}
          title={item.title}
          onPress={() => navigation.navigate(item.redirectPage)}
          translationKey="myAccount"
        />
      )}
      keyExtractor={(item) => item.id}
    />
  );
};
