import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Box from '../../../ui/Box';
import { css } from '../../../consts';

const SizeContainer = ({ possibleSizes, missingSizes }) => {
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
          boxStyle={{ backgroundColor: css.colors.main, ...css.item.sizeBox }}
          textStyle={{ color: css.colors.white }}
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
            backgroundColor: css.colors.lightGray,
            ...css.item.sizeBox,
          }}
          textStyle={{ color: css.colors.black }}
        />
      );
    }

    // Other
    return (
      <Box
        label={size}
        boxStyle={{
          backgroundColor: css.colors.white,
          borderColor: css.colors.main,
          borderWidth: 1,
          ...css.item.sizeBox,
        }}
        textStyle={{ color: css.colors.main }}
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

export default React.memo(SizeContainer);
