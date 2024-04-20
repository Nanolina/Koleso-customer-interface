import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { colors, css } from '../../../../consts';
import { IRootState } from '../../../../redux/rootReducer';
import { setSelectedProductColor } from '../../../../redux/slices/productsSlice';
import { AppDispatch } from '../../../../redux/store';
import { ColorType, IImagesWith1Color } from '../../types';

export const ThumbnailBar: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { selectedColor, items: colorsWithImagesItems } = useSelector(
    (state: IRootState) => state.products.product.colorsWithImages
  );

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.container}
    >
      {colorsWithImagesItems.map((colorWithImages: IImagesWith1Color) => (
        <TouchableOpacity
          key={colorWithImages.id}
          onPress={() => {
            dispatch(
              setSelectedProductColor(colorWithImages.color as ColorType)
            );
          }}
        >
          <View
            style={
              selectedColor === colorWithImages.color
                ? styles.selected
                : styles.notSelected
            }
          >
            <Image
              source={{ uri: colorWithImages.images[0] }}
              style={styles.image}
            />
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    gap: 10,
  },
  image: {
    width: 50,
    height: 70,
    borderWidth: 2,
    borderColor: colors.white,
    borderRadius: css.borderRadiusMax,
  },
  notSelected: {
    borderWidth: 2,
    borderColor: colors.white,
  },
  selected: {
    borderWidth: 2,
    borderColor: colors.main,
    borderRadius: css.borderRadiusMax,
  },
});
