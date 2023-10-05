import { StyleSheet, View } from 'react-native';
import { css } from '../../../consts';
import { Price } from '../ui/Price';

export const PriceContainer = ({ price, oldPrice }) => {
  return (
    <View style={styles.centeredContent}>
      <View style={styles.container}>
        <Price price={price} style={styles.currentPrice} />
        <Price price={oldPrice} style={styles.oldPrice} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: css.borderRadius,
    backgroundColor: 'rgba(7, 214, 15, 0.55)',
    paddingHorizontal: 15,
    paddingVertical: 5,
    gap: 10,
  },
  currentPrice: {
    fontWeight: 'bold',
    fontSize: css.size.title,
  },
  oldPrice: {
    textDecorationLine: 'line-through',
    color: css.colors.gray,
  },
});
