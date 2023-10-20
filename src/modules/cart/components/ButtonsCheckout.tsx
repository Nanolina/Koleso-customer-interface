import { useNavigation } from '@react-navigation/native';
import { StyleSheet, View } from 'react-native';
import { css } from '../../../consts';
import { ButtonGreen } from '../../../ui/ButtonGreen';

export const ButtonsCheckout = () => {
  const navigation: any = useNavigation();

  return (
    <View style={styles.container}>
      <ButtonGreen
        text="Checkout"
        onPress={() => navigation.navigate('CheckoutPage')}
      />
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
