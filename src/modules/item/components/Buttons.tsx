import { StyleSheet, View } from 'react-native';
import { css } from '../../../consts';
import { Button } from '../../../ui/Button';

export const Buttons = () => {
  return (
    <View style={styles.container}>
      <Button text="Buy now" backgroundColor={css.colors.orange} width="45%" />
      <Button text="Add to cart" backgroundColor={css.colors.new} width="45%" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: css.padding,
    backgroundColor: css.colors.white,
    paddingBottom: 5,
    justifyContent: 'space-between',
  },
});
