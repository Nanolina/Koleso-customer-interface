import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { clearAllFilters } from '../../../../redux/slices/filterSlice';
import { colors, sizes } from '../../../consts';

export const ResetAll = () => {
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => dispatch(clearAllFilters())}>
        <Text style={styles.text}>Reset all</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-end',
  },
  text: {
    fontSize: sizes.text16,
    color: colors.darkGray,
    textDecorationLine: 'underline',
  },
});
