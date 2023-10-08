import { StyleSheet, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { toggleDelivery } from '../../../../redux/slices/cartSlice';
import { Button } from '../../../ui/Button';
import { ButtonWithBorder } from '../../../ui/ButtonWithBorder';

export const Buttons = () => {
  const { delivery } = useSelector((state: any) => state.cart);
  const dispatch = useDispatch();

  return delivery === 'Self-delivery' ? (
    <View style={styles.container}>
      <Button
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
      <Button
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
    width: 150,
  },
});
