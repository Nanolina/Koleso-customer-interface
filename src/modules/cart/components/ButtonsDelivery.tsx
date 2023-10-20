import { StyleSheet, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { courier, deliveryPoint } from '../../../../consts';
import { toggleDelivery } from '../../../../redux/slices/cartSlice';
import { css } from '../../../consts';
import { ButtonGradient } from '../../../ui/ButtonGradient';
import { ButtonWithBorder } from '../../../ui/ButtonWithBorder';

export const ButtonsDelivery = () => {
  const { delivery } = useSelector((state: any) => state.cart);
  const dispatch = useDispatch();

  return delivery === deliveryPoint ? (
    <View style={styles.container}>
      <ButtonGradient
        text={deliveryPoint}
        onPress={() => dispatch(toggleDelivery(deliveryPoint))}
        style={styles.button}
      />
      <ButtonWithBorder
        text={courier}
        onPress={() => dispatch(toggleDelivery(courier))}
      />
    </View>
  ) : (
    <View style={styles.container}>
      <ButtonWithBorder
        text={deliveryPoint}
        onPress={() => dispatch(toggleDelivery(deliveryPoint))}
      />
      <ButtonGradient
        text={courier}
        onPress={() => dispatch(toggleDelivery(courier))}
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
