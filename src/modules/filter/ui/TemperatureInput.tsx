import { StyleSheet, TextInput } from 'react-native';
import { useDispatch } from 'react-redux';
import { css } from '../../../consts';

export const TemperatureInput = ({ temperature, handleTemperature }) => {
  const dispatch = useDispatch();

  return (
    <TextInput
      style={styles.input}
      value={temperature}
      maxLength={5}
      keyboardType="numeric"
      onChangeText={(text) => {
        // If the text starts with '0' and the length is greater than 1 (e.g., '01', '023', etc.), delete the first '0'
        if (text.startsWith('0') && text.length > 1) {
          text = text.substring(1);
        }
        // Make sure the text is either empty or consists only of numbers
        if (text.trim() === '' || /^\d+$/.test(text)) {
          dispatch(handleTemperature(text));
        }
      }}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: css.colors.border,
    borderRadius: css.borderRadius,
    textAlign: 'center',
    fontSize: css.size.text16,
    color: css.colors.black,
    width: 100,
    height: 50,
  },
});
