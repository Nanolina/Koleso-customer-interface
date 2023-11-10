import { useNavigation } from '@react-navigation/native';
import React, { useCallback } from 'react';
import { FlatList } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../../redux/rootReducer';
import { selectCategory } from '../../../../redux/slices/catalogSlice';
import { CatalogItem } from './CatalogItem';

export const Categories: React.FC = () => {
  const dispatch = useDispatch();
  const navigation: any = useNavigation();

  const categories = useSelector(
    (state: RootState) => state.catalog.section?.categories
  );

  const handleRedirections = useCallback(
    (item) => {
      if (item.subcategories) {
        navigation.navigate('SubcategoriesPage');
      } else {
        navigation.navigate('Main');
      }
    },
    [navigation]
  );

  return (
    <FlatList
      data={categories}
      renderItem={({ item }) => (
        <CatalogItem
          item={item}
          onPress={() => {
            dispatch(selectCategory(item));
            handleRedirections(item);
          }}
        />
      )}
      keyExtractor={(item) => item.id}
    />
  );
};
