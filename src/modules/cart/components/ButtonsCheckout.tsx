import { useNavigation } from '@react-navigation/native';
import { StyleSheet, View } from 'react-native';
import { useSelector } from 'react-redux';
import { css } from '../../../consts';
import { ButtonGreen } from '../../../ui/ButtonGreen';
import { selfDelivery } from '../../../../consts';

export const ButtonsCheckout = () => {
  const { delivery } = useSelector((state: any) => state.cart);
  const navigation: any = useNavigation();

  return (
    <View style={styles.container}>
      {delivery === selfDelivery ? (
        <ButtonGreen text="Book" onPress={() => {}} />
      ) : (
        <ButtonGreen
          text="Checkout"
          onPress={() => navigation.navigate('CheckoutPage')}
        />
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
