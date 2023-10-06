import { StyleSheet, View } from 'react-native';
import { css } from '../../../consts';
import { Gradient } from '../../../ui/Gradient';
import { SizeBox } from '../ui/SizeBox';

export const SizeContainer = ({ itemSize, possibleSizes, missingSizes }) => {
  return (
    <View style={styles.container}>
      {possibleSizes.map((size) =>
        itemSize === size ? (
          <Gradient style={styles.gradientBox}>
            <SizeBox size={size} isStyleBox={false} />
          </Gradient>
        ) : missingSizes.includes(size) ? (
          <SizeBox size={size} isStyleBox={true} isMissingSize={true} />
        ) : (
          <Gradient style={styles.gradientBox}>
            <SizeBox size={size} isStyleBox={true} />
          </Gradient>
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
  gradientBox: {
    borderRadius: css.item.gradientBoxSize.borderRadius,
    alignItems: 'center',
    justifyContent: 'center',
    ...css.item.boxSize,
  },
});
