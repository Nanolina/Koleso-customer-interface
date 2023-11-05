import { StyleSheet, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { togglePayment } from '../../../../redux/slices/paymentSlice';
import { css } from '../../../consts';
import { Button } from '../../../ui/Button';

export const ButtonsPayment = () => {
  const { payment } = useSelector((state: any) => state.payment);
  const dispatch = useDispatch();

  return payment === 'Card' ? (
    <View style={styles.container}>
      <Button
        text="Card"
        onPress={() => dispatch(togglePayment('Card'))}
        style={styles.button}
        width="40%"
      />
      <Button
        text="Apple pay"
        onPress={() => dispatch(togglePayment('Apple pay'))}
        border={true}
        backgroundColor={css.colors.white}
        textColor={css.colors.black}
        width="40%"
      />
    </View>
  ) : (
    <View style={styles.container}>
      <Button
        text="Card"
        onPress={() => dispatch(togglePayment('Card'))}
        border={true}
        backgroundColor={css.colors.white}
        textColor={css.colors.black}
        width="40%"
      />
      <Button
        text="Apple pay"
        onPress={() => dispatch(togglePayment('Apple pay'))}
        style={styles.button}
        width="40%"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    width: css.size.buttonWidth,
  },
});
