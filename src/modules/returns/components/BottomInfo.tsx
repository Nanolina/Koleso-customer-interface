import { StyleSheet, Text, View } from 'react-native';
import { PriceContainer } from '../../../components/PriceContainer';
import { css } from '../../../consts';
import { ButtonGradient } from '../../../ui/ButtonGradient';

// mock data
const quantity = 1;
const totalPrice = 230;

export const BottomInfo = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        {quantity} {quantity > 1 ? 'items' : 'item'}
      </Text>
      <PriceContainer price={totalPrice} priceSize={css.size.text16} />
      <ButtonGradient text="Make a request" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-end',
    gap: 10,
    paddingBottom: 20,
  },
  text: {
    fontSize: css.size.text18,
  },
  price: {
    fontSize: css.size.text18,
    fontWeight: 'bold',
  },
});
