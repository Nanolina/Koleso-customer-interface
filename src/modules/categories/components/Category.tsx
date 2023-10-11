import { useNavigation } from '@react-navigation/native';
import React from 'react';
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

export const Category: React.FC<any> = ({ category }) => {
  const dispatch = useDispatch();
  const navigation: any = useNavigation();

  const handleRedirections = (category) => {
    if (category.subcategories) {
      navigation.navigate('SubcategoriesPage');
    } else {
      navigation.navigate('Main');
    }
  };

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
