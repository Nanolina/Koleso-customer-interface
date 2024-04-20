import React, { useCallback } from 'react';
import { StyleSheet, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { colors, css } from '../../../../consts';
import { IRootState } from '../../../../redux/rootReducer';
import { setSelectedProductSize } from '../../../../redux/slices/productsSlice';
import { AppDispatch } from '../../../../redux/store';
import { Box } from '../../../../ui/Box';
import { compileAllSizes } from '../../functions';

export const SizeContainer: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  const { colorGroups } = useSelector(
    (state: IRootState) => state.products.product.colorPalette
  );

  const { id, freeSizes, unavailableSizes, selectedSize } = useSelector(
    (state: IRootState) =>
      state.products.product.colorPalette.selectedColorGroup
  );

  const allSizes = compileAllSizes(colorGroups);

  const renderSizeBox = useCallback(
    (size: string) => {
      const isSelected = selectedSize === size;
      const isMissing =
        unavailableSizes.includes(size) || !freeSizes.includes(size);

      const boxStyle = isSelected
        ? { backgroundColor: colors.main, ...css.itemSizeBox }
        : isMissing
        ? { backgroundColor: colors.lightGray, ...css.itemSizeBox }
        : {
            backgroundColor: colors.white,
            borderColor: colors.main,
            borderWidth: 1,
            ...css.itemSizeBox,
          };

      const textStyle =
        isSelected || isMissing
          ? { color: colors.white }
          : { color: colors.main };

      return (
        <Box
          key={size}
          label={`${size}`}
          boxStyle={boxStyle}
          textStyle={textStyle}
          onPress={
            !isMissing
              ? () =>
                  dispatch(setSelectedProductSize({ size, colorGroupId: id }))
              : undefined
          }
        />
      );
    },
    [selectedSize, freeSizes, unavailableSizes]
  );

  return <View style={styles.container}>{allSizes.map(renderSizeBox)}</View>;
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    paddingVertical: 20,
    gap: 5,
  },
});
