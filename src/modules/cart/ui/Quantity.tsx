import { StyleSheet, Text } from 'react-native';
import { css } from '../../../consts';
import { Gradient } from '../../../ui/Gradient';

export const Quantity = ({ quantity }) => {
  return (
    <Gradient style={styles.gradient}>
      <Text style={styles.quantity}>{quantity}</Text>
    </Gradient>
  );
};

const styles = StyleSheet.create({
  quantity: {
    fontWeight: 'bold',
    fontSize: css.size.text20,
    color: css.colors.white,
  },
  gradient: {
    borderRadius: css.borderRadiusMin,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
});
