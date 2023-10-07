import { StyleSheet, Text, TextInput, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { css } from '../../../consts';

export const Range = ({ text, value, onChangeText }) => {
  const dispatch = useDispatch();

  return (
    <View style={styles.inputWrapper}>
      <Text style={styles.text}>{text}</Text>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={(input) => dispatch(onChangeText(input))}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: css.colors.border,
    borderRadius: css.borderRadius,
    padding: 5,
    width: 50,
    height: 30,
    fontSize: css.size.text16,
  },
  text: {
    fontSize: css.size.text16,
    color: css.colors.gray,
  },
});
