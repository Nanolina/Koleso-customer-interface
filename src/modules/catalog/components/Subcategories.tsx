import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { FlatList } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { selectSubcategory } from '../../../../redux/slices/catalogSlice';
import { CatalogItem } from './CatalogItem';

export const Subcategories: React.FC = () => {
  const navigation: any = useNavigation();
  const dispatch = useDispatch();

  const subcategories = useSelector(
    (state: any) => state.catalog.category.subcategories
  );

  return (
    <FlatList
      data={subcategories}
      renderItem={({ item }) => (
        <CatalogItem
          item={item}
          onPress={() => {
            dispatch(selectSubcategory(item));
            navigation.navigate('Main', { item });
          }}
        />
      )}
      keyExtractor={(item) => item.id}
    />
  );
};
