import { StyleSheet, Text, TextInput, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { css } from '../../../consts';
import { getNumericData } from '../functions';

export const Range = ({ text, value, onChangeText }) => {
  const dispatch = useDispatch();

  return (
    <View style={styles.inputWrapper}>
      <Text style={styles.text}>{text}</Text>
      <TextInput
        keyboardType="numeric"
        style={styles.input}
        value={value}
        onChangeText={(text) => dispatch(onChangeText(getNumericData(text)))}
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
    borderColor: css.colors.main,
    borderRadius: css.borderRadius,
    padding: 5,
    width: 60,
    height: 30,
    fontSize: css.size.text16,
  },
  text: {
    fontSize: css.size.text16,
    color: css.colors.gray,
  },
});
