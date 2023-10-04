import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';
import { handleClearQuery } from '../../../../../redux/slices/searchSlice';
import { css } from '../../../../consts';

export const DeleteText = ({ query }) => {
  const dispatch = useDispatch();

  return (
    <TouchableOpacity onPress={() => dispatch(handleClearQuery(query))}>
      <Text style={styles.text}>✕</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: css.size.text12,
    color: css.colors.gray,
  },
});
