import { StyleSheet, View } from 'react-native';
import { css } from '../../../consts';
import { ButtonWithBorder } from '../../../ui/ButtonWithBorder';

export const StoreButton = ({ onPress }) => {
  return (
    <View style={styles.container}>
      <ButtonWithBorder
        text="View store details"
        onPress={onPress}
        styleText={styles.text}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  text: {
    fontStyle: 'italic',
    fontSize: css.size.text16,
  },
});
