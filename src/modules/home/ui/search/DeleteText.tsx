import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';
import { colors, sizes } from '../../../../consts';
import { handleClearQuery } from '../../../../redux/slices/searchSlice';
import { ISearchQueryProps } from '../../types';

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
