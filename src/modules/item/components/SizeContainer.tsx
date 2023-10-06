import { StyleSheet, View } from 'react-native';
import { MissingSizeBox } from '../ui/MissingSizeBox';
import { SelectedSizeBox } from '../ui/SelectedSizeBox';
import { SizeBox } from '../ui/SizeBox';

export const SizeContainer = ({ itemSize, possibleSizes, missingSizes }) => {
  return (
    <View style={styles.container}>
      {possibleSizes.map((size) =>
        itemSize === size ? (
          <SelectedSizeBox size={itemSize} />
        ) : missingSizes.includes(size) ? (
          <MissingSizeBox size={size} />
        ) : (
          <SizeBox size={size} />
        )
      )}
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
