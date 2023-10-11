import { StyleSheet, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { togglePayment } from '../../../../redux/slices/paymentSlice';
import { css } from '../../../consts';
import { ButtonGradient } from '../../../ui/ButtonGradient';
import { ButtonWithBorder } from '../../../ui/ButtonWithBorder';

export const ButtonsPayment = () => {
  const { payment } = useSelector((state: any) => state.payment);
  const dispatch = useDispatch();

  return payment === 'Card' ? (
    <View style={styles.container}>
      <ButtonGradient
        text="Card"
        onPress={() => dispatch(togglePayment('Card'))}
        style={styles.button}
      />
      <ButtonWithBorder
        text="Apple pay"
        onPress={() => dispatch(togglePayment('Apple pay'))}
      />
    </View>
  ) : (
    <View style={styles.container}>
      <ButtonWithBorder
        text="Card"
        onPress={() => dispatch(togglePayment('Card'))}
      />
      <ButtonGradient
        text="Apple pay"
        onPress={() => dispatch(togglePayment('Apple pay'))}
        style={styles.button}
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
