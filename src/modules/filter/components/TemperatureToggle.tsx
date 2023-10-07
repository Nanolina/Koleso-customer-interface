import { StyleSheet, Text, View } from 'react-native';
import { css } from '../../../consts';
import { TemperatureDegreeContainer } from './TemperatureDegreeContainer';
import { ToggleContainer } from './ToggleContainer';

export const TemperatureToggle = ({
  text,
  temperatureToggle,
  handleTemperatureToggle,
  temperature,
  handleTemperature,
}) => {
  return (
    <View style={styles.row}>
      <Text style={styles.label}>{text}</Text>
      <View style={styles.toggleWithTemperature}>
        <ToggleContainer
          temperatureToggle={temperatureToggle}
          handleTemperatureToggle={handleTemperatureToggle}
        />
        <TemperatureDegreeContainer
          temperature={temperature}
          handleTemperature={handleTemperature}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
  },
  label: {
    fontWeight: 'bold',
    fontSize: css.size.text16,
    width: 50,
  },
  toggleWithTemperature: {
    flexDirection: 'row',
  },
});
