import { StyleSheet, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { courier, pickupPoint } from '../../../../consts';
import { toggleDelivery } from '../../../../redux/slices/cartSlice';
import { css } from '../../../consts';
import { Button } from '../../../ui/Button';

export const ButtonsDelivery = () => {
  const { delivery } = useSelector((state: any) => state.cart);
  const dispatch = useDispatch();

  return delivery === pickupPoint ? (
    <View style={styles.container}>
      <Button
        text={pickupPoint}
        onPress={() => dispatch(toggleDelivery(pickupPoint))}
        style={styles.button}
        width="40%"
      />
      <Button
        text={courier}
        onPress={() => dispatch(toggleDelivery(courier))}
        width="40%"
        border={true}
        backgroundColor={css.colors.white}
        textColor={css.colors.black}
      />
    </View>
  ) : (
    <View style={styles.container}>
      <Button
        text={pickupPoint}
        onPress={() => dispatch(toggleDelivery(pickupPoint))}
        width="40%"
        border={true}
        backgroundColor={css.colors.white}
        textColor={css.colors.black}
      />
      <Button
        text={courier}
        onPress={() => dispatch(toggleDelivery(courier))}
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
