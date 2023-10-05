import { StyleSheet, View } from 'react-native';
import { css, sizes } from '../../../consts';
import { Gradient } from '../../../ui/Gradient';
import { SizeBox } from '../ui/SizeBox';

export const SizeContainer = ({ itemSize }) => {
  return (
    <View style={styles.container}>
      {sizes.map((size) =>
        itemSize === size ? (
          <Gradient style={styles.gradientBox}>
            <View style={styles.selectedBox}>
              <SizeBox size={size} isStyleBox={false} />
            </View>
          </Gradient>
        ) : (
          <SizeBox size={size} isStyleBox={true} />
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
    borderRadius: css.borderRadius,
    alignItems: 'center',
    justifyContent: 'center',
    ...css.item.boxSize,
  },
  selectedBox: {
    borderColor: 'transparent',
  },
});
