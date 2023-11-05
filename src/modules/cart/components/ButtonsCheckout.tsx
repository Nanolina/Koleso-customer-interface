import { useNavigation } from '@react-navigation/native';
import { StyleSheet, View } from 'react-native';
import { css } from '../../../consts';
import { Button } from '../../../ui/Button';

export const ButtonsCheckout = () => {
  const navigation: any = useNavigation();

  return (
    <View style={styles.container}>
      <Button
        text="Checkout"
        onPress={() => navigation.navigate('CheckoutPage')}
        backgroundColor={css.colors.orange}
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
