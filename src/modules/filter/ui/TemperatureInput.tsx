import { StyleSheet, TextInput } from 'react-native';
import { useDispatch } from 'react-redux';
import { css } from '../../../consts';
import { getNumericData } from '../functions';

export const TemperatureInput = ({ temperature, handleTemperature }) => {
  const dispatch = useDispatch();

  return (
    <TextInput
      style={styles.input}
      value={temperature}
      maxLength={5}
      keyboardType="numeric"
      onChangeText={(text) => dispatch(handleTemperature(getNumericData(text)))}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: css.colors.main,
    borderRadius: css.borderRadius,
    textAlign: 'center',
    fontSize: css.size.text16,
    color: css.colors.black,
    width: 100,
    height: 50,
  },
});
