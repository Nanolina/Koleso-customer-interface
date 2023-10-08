import { StyleSheet, View } from 'react-native';
import { useSelector } from 'react-redux';
import { css } from '../../../consts';
import { ButtonGreen } from '../../../ui/ButtonGreen';

export const ButtonsCheckout = () => {
  const { delivery } = useSelector((state: any) => state.cart);

  return (
    <View style={styles.container}>
      {delivery === 'Self-delivery' ? (
        <ButtonGreen text="Book" onPress={() => {}} />
      ) : (
        <ButtonGreen text="Checkout" onPress={() => {}} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-end',
    backgroundColor: css.colors.white,
    paddingBottom: 5,
    paddingHorizontal: css.padding,
  },
});
