import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';
import {
  ISearchQueryProps,
  handleClearQuery,
} from '../../../../../redux/slices/searchSlice';
import { colors, sizes } from '../../../../consts';

export const DeleteText: React.FC<ISearchQueryProps> = ({ query }) => {
  const dispatch = useDispatch();

  return (
    <TouchableOpacity onPress={() => dispatch(handleClearQuery(query))}>
      <Text style={styles.text}>✕</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: sizes.text16,
    color: colors.gray,
  },
});
