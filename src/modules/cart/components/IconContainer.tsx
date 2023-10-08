import { StyleSheet, View } from 'react-native';
import { Icon } from '../../../ui/Icon';
import { gapBetweenDetails } from '../consts';
import { QuantityContainer } from './QuantityContainer';

export const IconContainer = ({ quantity }) => {
  return (
    <View style={styles.container}>
      <Icon name="delete" />
      <Icon name="favorite-border" />
      <QuantityContainer quantity={quantity} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-end',
    gap: gapBetweenDetails,
  },
});
