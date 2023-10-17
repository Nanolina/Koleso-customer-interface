import { StyleSheet, View } from 'react-native';
import { Icon } from '../../../ui/Icon';
import { gapBetweenIcons } from '../consts';

export const IconContainer = () => {
  return (
    <View style={styles.container}>
      <Icon name="delete" />
      <Icon name="favorite-border" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-end',
    gap: gapBetweenIcons,
  },
});
