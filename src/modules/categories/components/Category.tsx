import { useNavigation } from '@react-navigation/native';
import React, { useCallback } from 'react';
import {
  Dimensions,
  Image,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import { useDispatch } from 'react-redux';
import { selectCategory } from '../../../../redux/slices/catalogSlice';
import { css } from '../../../consts';
import { WebCardWrapper } from '../../../ui/WebCardWrapper';

const { width } = Dimensions.get('window');

interface CategoryType {
  id: string;
  title: string;
  image: number; // Using only local images via require
  subcategories?: CategoryType[];
}

export const Category: React.FC<{ category: CategoryType }> = ({ category }) => {
  const dispatch = useDispatch();
  const navigation: any = useNavigation();

  const handleRedirections = useCallback(
    (category) => {
      if (category.subcategories) {
        navigation.navigate('SubcategoriesPage');
      } else {
        navigation.navigate('Main');
      }
    },
    [navigation, category.subcategories]
  );

  return (
    <WebCardWrapper cardWidth={width}>
      <TouchableOpacity
        style={styles.container}
        onPress={() => {
          dispatch(selectCategory(category));
          handleRedirections(category);
        }}
      >
        <Image source={category.image} style={styles.image} />
        <Text style={styles.text}>{category.title}</Text>
      </TouchableOpacity>
    </WebCardWrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    ...css.cards.container,
  },
  image: {
    resizeMode: 'cover',
    ...css.cards.image,
  },
  text: {
    fontWeight: 'bold',
    ...css.cards.text,
  },
});
