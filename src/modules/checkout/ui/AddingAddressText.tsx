import { AntDesign } from '@expo/vector-icons';
import { StyleSheet, Text, View } from 'react-native';
import { colors } from '../../../consts';

export const AddingAddressText = () => {
  return (
    <View style={styles.container}>
      <AntDesign name="plus" size={12} color={colors.black} />
      <Text>Add an address</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
  },
});
