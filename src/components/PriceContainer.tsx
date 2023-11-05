import { StyleSheet, View } from 'react-native';
import { css } from '../consts';
import { Price } from '../ui/Price';

export const PriceContainer = ({
  price,
  oldPrice,
  priceSize,
  hasBackground = true,
}: any) => {
  const styles = getStyles(priceSize, hasBackground);

  return (
    <View style={styles.centeredContent}>
      <View style={styles.container}>
        <Price price={price} style={styles.currentPrice} />
      </View>
      {oldPrice && <Price price={oldPrice} style={styles.oldPrice} />}
    </View>
  );
};

const getStyles = (priceSize, hasBackground) =>
  StyleSheet.create({
    centeredContent: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      gap: 5,
    },
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      borderRadius: css.borderRadiusMin,
      paddingHorizontal: 10,
      paddingVertical: 5,
    },
    currentPrice: {
      fontWeight: 'bold',
      fontSize: priceSize,
    },
    oldPrice: {
      textDecorationLine: 'line-through',
      color: css.colors.gray,
    },
  });
