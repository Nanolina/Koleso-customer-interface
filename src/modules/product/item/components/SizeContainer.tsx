import React, { useCallback, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { colors, css } from '../../../../consts';
import { Box } from '../../../../ui/Box';
import { ISizeContainerProps } from '../types';

export const SizeContainer: React.FC<ISizeContainerProps> = React.memo(
  ({ possibleSizes, missingSizes }) => {
    const [selectedSize, setSelectedSize] = useState<number | null>(null);

    const handlePress = useCallback((size: number) => {
      setSelectedSize(size);
    }, []);

    const renderSizeBox = useCallback(
      (size: number) => {
        const isSelected = selectedSize === size;
        const isMissing = missingSizes.includes(size);

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
            onPress={!isMissing ? () => handlePress(size) : undefined}
          />
        );
      },
      [selectedSize, missingSizes, handlePress]
    );

    return (
      <View style={styles.container}>{possibleSizes?.map(renderSizeBox)}</View>
    );
  }
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    paddingVertical: 20,
    gap: 5,
  },
});
