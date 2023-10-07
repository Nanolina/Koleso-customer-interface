import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';
import { css } from '../../../../consts';

export const TemperatureSign = ({
  sign,
  handleTemperatureToggle,
  style,
}: any) => {
  const dispatch = useDispatch();

  return (
    <TouchableOpacity
      onPress={() => dispatch(handleTemperatureToggle(sign))}
      style={style}
    >
      <Text style={styles.sign}>{sign}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  sign: {
    fontSize: css.size.text16,
  },
});
