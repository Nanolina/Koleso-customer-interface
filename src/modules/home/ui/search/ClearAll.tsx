import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';
import { handleClearAllQueries } from '../../../../../redux/slices/searchSlice';
import { colors, css, sizes } from '../../../../consts';

export const ClearAll: React.FC = () => {
  const dispatch = useDispatch();

  return (
    <TouchableOpacity
      onPress={() => dispatch(handleClearAllQueries())}
      style={styles.button}
    >
      <Text style={css.resetAllButton}>Clear all</Text>
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
    fontSize: sizes.text18,
  },
});
