import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Box from '../../../ui/Box';
import { colors, css } from '../../../consts';

interface ISizeContainerProps {
  possibleSizes: number[];
  missingSizes: number[];
}

export const SizeContainer: React.FC<ISizeContainerProps> = React.memo(({
  possibleSizes,
  missingSizes,
}) => {
  const [selectedSize, setSelectedSize] = useState(null);

  const handlePress = (size) => {
    setSelectedSize(size);
  };

  const renderSizeBox = (size) => {
    // Selected
    if (selectedSize === size) {
      return (
        <Box
          label={size}
          boxStyle={{ backgroundColor: colors.main, ...css.item.sizeBox }}
          textStyle={{ color: colors.white }}
          onPress={() => handlePress(size)}
        />
      );
    }

    // Missing
    if (missingSizes.includes(size)) {
      return (
        <Box
          label={size}
          boxStyle={{
            backgroundColor: colors.lightGray,
            ...css.item.sizeBox,
          }}
          textStyle={{ color: colors.black }}
        />
      );
    }

    // Other
    return (
      <Box
        label={size}
        boxStyle={{
          backgroundColor: colors.white,
          borderColor: colors.main,
          borderWidth: 1,
          ...css.item.sizeBox,
        }}
        textStyle={{ color: colors.main }}
        onPress={() => handlePress(size)}
      />
    );
  };

  return (
    <View style={styles.container}>
      {possibleSizes?.map((size) => (
        <View key={size}>{renderSizeBox(size)}</View>
      ))}
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    paddingVertical: 20,
    gap: 5,
  },
});
