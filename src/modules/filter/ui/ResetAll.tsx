import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { clearAllFilters } from '../../../../redux/slices/filterSlice';
import { css } from '../../../consts';

export const ResetAll = () => {
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => dispatch(clearAllFilters())}>
        <Text style={css.resetAllButton}>Reset all</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-end',
  },
});
