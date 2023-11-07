import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';
import { handleClearAllQueries } from '../../../../../redux/slices/searchSlice';
import { colors } from '../../../../consts';

export const ClearAll = () => {
  const dispatch = useDispatch();

  return (
    <TouchableOpacity
      onPress={() => dispatch(handleClearAllQueries())}
      style={styles.button}
    >
      <Text style={styles.text}>Clear all</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    alignSelf: 'flex-end',
    padding: 10,
  },
  text: {
    color: colors.gray,
  },
});
