import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { useDispatch } from 'react-redux';
import { css } from '../../../consts';
import { Gradient } from '../../../ui/Gradient';

export const TemperatureToggle = ({
  text,
  temperatureToggle,
  setTemperatureToggle,
  searchTemperature,
  setSearchTemperature,
}) => {
  const dispatch = useDispatch();

  return (
    <View style={styles.row}>
      <Text style={styles.label}>{text}</Text>
      <View style={styles.toggleWithTemperature}>
        <View style={styles.toggleContainer}>
          {temperatureToggle === '+' ? (
            <Gradient style={styles.gradientLeft}>
              <TouchableOpacity
                // style={[styles.toggle, styles.togglePlus]}
                onPress={() => dispatch(setTemperatureToggle('+'))}
              >
                <Text style={styles.sign}>+</Text>
              </TouchableOpacity>
            </Gradient>
          ) : (
            <TouchableOpacity
              style={[styles.toggle, styles.togglePlus]}
              onPress={() => dispatch(setTemperatureToggle('+'))}
            >
              <Text style={styles.sign}>+</Text>
            </TouchableOpacity>
          )}

          {temperatureToggle === '-' ? (
            <Gradient style={styles.gradientRight}>
              <TouchableOpacity
                // style={[styles.toggle, styles.toggleMinus]}
                onPress={() => dispatch(setTemperatureToggle('-'))}
              >
                <Text style={styles.sign}>-</Text>
              </TouchableOpacity>
            </Gradient>
          ) : (
            <TouchableOpacity
              style={[styles.toggle, styles.toggleMinus]}
              onPress={() => dispatch(setTemperatureToggle('-'))}
            >
              <Text style={styles.sign}>-</Text>
            </TouchableOpacity>
          )}
        </View>
        <View style={styles.containerDegree}>
          <TextInput
            style={styles.input}
            value={searchTemperature}
            maxLength={5}
            keyboardType="numeric"
            onChangeText={(text) => {
              // If the text starts with '0' and the length is greater than 1 (e.g., '01', '023', etc.), delete the first '0'
              if (text.startsWith('0') && text.length > 1) {
                text = text.substring(1);
              }
              // Make sure the text is either empty or consists only of numbers
              if (text.trim() === '' || /^\d+$/.test(text)) {
                setSearchTemperature(text);
              }
            }}
          />
          <Text style={styles.degree}>°C</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
    // height: 50,
  },
  label: {
    fontWeight: 'bold',
    fontSize: css.size.text16,
    width: 50,
  },
  toggleContainer: {
    flexDirection: 'row',
    width: 100,
  },
  toggleWithTemperature: {
    flexDirection: 'row',
  },
  toggle: {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: css.colors.border,
    // backgroundColor: 'white',
    padding: '10%',
  },
  togglePlus: {
    borderTopLeftRadius: css.borderRadius,
    borderBottomLeftRadius: css.borderRadius,
  },
  toggleMinus: {
    borderTopRightRadius: css.borderRadius,
    borderBottomRightRadius: css.borderRadius,
  },
  activeToggle: {
    // backgroundColor: css.colors.border,
  },
  sign: {
    fontSize: css.size.text16,
  },
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
  containerDegree: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  degree: {
    fontSize: css.size.text16,
  },
  gradientRight: {
    borderTopRightRadius: css.borderRadius,
    borderBottomRightRadius: css.borderRadius,
    justifyContent: 'center',
    alignItems: 'center',
  },
  gradientLeft: {
    borderTopLeftRadius: css.borderRadius,
    borderBottomLeftRadius: css.borderRadius,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
