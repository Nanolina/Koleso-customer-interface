import React from 'react';
import {
  Dimensions,
  Image,
  Platform,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { useDispatch } from 'react-redux';
import { selectCategory } from '../../../../redux/slices/catalogSlice';
import { css } from '../../../consts';
import { WebCardWrapper } from '../../../ui/WebCardWrapper';

const { width, height } = Dimensions.get('window');
const cardWidth = width / 5;
const imageHeight = height / 3.5;

export const Category: React.FC<any> = ({ category }) => {
  const dispatch = useDispatch();

  return (
    <WebCardWrapper cardWidth={cardWidth}>
      <TouchableOpacity
        style={styles.cardContainer}
        onPress={() => dispatch(selectCategory(category))}
      >
        <Image source={category.image} style={styles.image} />
      </TouchableOpacity>
    </WebCardWrapper>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    flex: 1,
    paddingVertical: Platform.OS === 'web' ? 20 : 2.5,
    paddingHorizontal: Platform.OS === 'web' ? 20 : 2.5,
    maxWidth: Platform.OS === 'web' ? cardWidth : '100%',
  },
  image: {
    width: '100%',
    height: Platform.OS === 'web' ? imageHeight : 100,
    resizeMode: 'cover',
    borderRadius: css.borderRadius,
  },
});
