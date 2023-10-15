import { StyleSheet, View } from 'react-native';
import { courier, selfReturn } from '../../../../consts';
import { ButtonWithBorder } from '../../../ui/ButtonWithBorder';

export const ButtonsBottom = () => {
  return (
    <View style={styles.container}>
      <ButtonWithBorder text={selfReturn} />
      <ButtonWithBorder text={courier} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
