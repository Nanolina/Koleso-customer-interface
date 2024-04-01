import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from '@react-navigation/native';
import React from 'react';
import { FlatList } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { CardItem } from '../../../components/CardItem';
import { IRootState } from '../../../redux/rootReducer';
import { selectSubcategory } from '../../../redux/slices/catalogSlice';

export const Subcategories: React.FC = () => {
  const navigation: NavigationProp<ParamListBase> = useNavigation();
  const dispatch = useDispatch();

  const subcategories = useSelector(
    (state: IRootState) => state.catalog.category.subcategories
  );

  return (
    <FlatList
      data={subcategories}
      renderItem={({ item }) => (
        <CardItem
          image={item.image}
          title={item.title}
          translationKey="catalog"
          onPress={() => {
            dispatch(selectSubcategory(item));
            navigation.navigate('Main');
          }}
        />
      )}
      keyExtractor={(item) => item.id}
    />
  );
};
