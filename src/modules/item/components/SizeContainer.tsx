import React from 'react';
import { StyleSheet, View } from 'react-native';
import MissingSizeBox from '../ui/size/MissingSizeBox';
import SelectedSizeBox from '../ui/size/SelectedSizeBox';
import SizeBox from '../ui/size/SizeBox';

const SizeContainer = ({ itemSize, possibleSizes, missingSizes }) => {
  const renderSizeBox = (size) => {
    if (itemSize === size) {
      return <SelectedSizeBox size={itemSize} />;
    }
    if (missingSizes.includes(size)) {
      return <MissingSizeBox size={size} />;
    }
    return <SizeBox size={size} />;
  };

  return (
    <View style={styles.container}>
      {possibleSizes.map((size) => renderSizeBox(size))}
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
