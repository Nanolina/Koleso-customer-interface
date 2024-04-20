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
import { ColorType, IColorGroup } from '../../types';

export const ThumbnailBar: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { selectedColor, colorGroups } = useSelector(
    (state: IRootState) => state.products.product.colorPalette
  );

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.container}
    >
      {colorGroups.map((colorGroup: IColorGroup) => (
        <TouchableOpacity
          key={colorGroup.id}
          onPress={() => {
            dispatch(setSelectedProductColor(colorGroup.color as ColorType));
          }}
        >
          <View
            style={
              selectedColor === colorGroup.color
                ? styles.selected
                : styles.notSelected
            }
          >
            <Image
              source={{ uri: colorGroup.images[0] }}
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
