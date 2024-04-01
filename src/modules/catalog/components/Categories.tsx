import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from '@react-navigation/native';
import React, { useCallback } from 'react';
import { FlatList } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { CardItem } from '../../../components/CardItem';
import { RootState } from '../../../redux/rootReducer';
import { selectCategory } from '../../../redux/slices/catalogSlice';

export const Categories: React.FC = () => {
  const dispatch = useDispatch();
  const navigation: NavigationProp<ParamListBase> = useNavigation();

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
        <CardItem
          image={item.image}
          title={item.title}
          translationKey="catalog"
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
