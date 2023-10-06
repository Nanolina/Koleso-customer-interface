import { StyleSheet, View } from 'react-native';
import { css } from '../../../consts';
import { Button } from '../ui/Button';

export const Buttons = () => {
  return (
    <View style={styles.container}>
      <Button type="buy" text="Buy now" />
      <Button type="cart" text="Add to cart" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: css.padding,
    paddingHorizontal: css.padding,
    backgroundColor: css.colors.white,
    paddingBottom: 5,
  },
});
