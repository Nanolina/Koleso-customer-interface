import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from '@react-navigation/native';
import React from 'react';
import { FlatList } from 'react-native';
import { useDispatch } from 'react-redux';
import { selectSection } from '../../../../redux/slices/catalogSlice';
import { data } from '../data';
import { CatalogItem } from './CatalogItem';

export const Sections: React.FC = () => {
  const dispatch = useDispatch();
  const navigation: NavigationProp<ParamListBase> = useNavigation();

  return (
    <FlatList
      data={data}
      renderItem={({ item }) => (
        <CatalogItem
          item={item}
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
