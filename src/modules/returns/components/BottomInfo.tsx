import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, View } from 'react-native';
import { PriceContainer } from '../../../components/PriceContainer';
import { css } from '../../../consts';
import { Button } from '../../../ui/Button';

// mock data
const quantity = 1;
const totalPrice = 230;

export const BottomInfo = () => {
  const navigation: any = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        {quantity} {quantity > 1 ? 'items' : 'item'}
      </Text>
      <PriceContainer price={totalPrice} priceSize={css.size.text16} />
      <Button
        text="Make a request"
        onPress={() => navigation.navigate('ReturnByCourierFormPage')}
        backgroundColor={css.colors.orange}
      />
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
