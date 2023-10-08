import { StyleSheet, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { toggleDelivery } from '../../../../redux/slices/cartSlice';
import { css } from '../../../consts';
import { ButtonGradient } from '../../../ui/ButtonGradient';
import { ButtonWithBorder } from '../../../ui/ButtonWithBorder';

export const ButtonsDelivery = () => {
  const { delivery } = useSelector((state: any) => state.cart);
  const dispatch = useDispatch();

  return delivery === 'Self-delivery' ? (
    <View style={styles.container}>
      <ButtonGradient
        text="Self-delivery"
        onPress={() => dispatch(toggleDelivery('Self-delivery'))}
        style={styles.button}
      />
      <ButtonWithBorder
        text="Courier"
        onPress={() => dispatch(toggleDelivery('Courier'))}
      />
    </View>
  ) : (
    <View style={styles.container}>
      <ButtonWithBorder
        text="Self-delivery"
        onPress={() => dispatch(toggleDelivery('Self-delivery'))}
      />
      <ButtonGradient
        text="Courier"
        onPress={() => dispatch(toggleDelivery('Courier'))}
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
