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

const { width, height } = Dimensions.get('window');
const imageHeight = height / 10;

export const Category: React.FC<any> = ({ category }) => {
  const dispatch = useDispatch();

  return (
    <WebCardWrapper cardWidth={width}>
      <TouchableOpacity
        style={styles.container}
        onPress={() => dispatch(selectCategory(category))}
      >
        <Image source={category.image} style={styles.image} />
        <Text style={styles.text}>{category.title}</Text>
      </TouchableOpacity>
    </WebCardWrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    gap: 20,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: Platform.OS === 'web' ? 100 : 10,
  },
  image: {
    width: Platform.OS === 'web' ? 100 : 50,
    height: Platform.OS === 'web' ? 100 : 50,
    resizeMode: 'cover',
    borderRadius: css.borderRadius,
  },
  text: {
    fontSize: Platform.OS === 'web' ? css.size.text20 : css.size.text16,
    fontWeight: 'bold',
  },
});
