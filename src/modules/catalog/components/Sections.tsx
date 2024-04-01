import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from '@react-navigation/native';
import React from 'react';
import { FlatList } from 'react-native';
import { useDispatch } from 'react-redux';
import { CardItem } from '../../../components/CardItem';
import { selectSection } from '../../../redux/slices/catalogSlice';
import { data } from '../data';

export const Sections: React.FC = () => {
  const dispatch = useDispatch();
  const navigation: NavigationProp<ParamListBase> = useNavigation();

  return (
    <FlatList
      data={data}
      renderItem={({ item }) => (
        <CardItem
          image={item.image}
          title={item.title}
          translationKey="catalog"
          onPress={() => {
            dispatch(selectSection(item));
            navigation.navigate('CategoriesPage');
          }}
        />
      )}
      keyExtractor={(item) => item.id}
    />
  );
};
