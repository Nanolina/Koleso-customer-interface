import { StyleSheet, Text, View } from 'react-native';
import { css } from '../../../../consts';
import { TemperatureInput } from '../../ui/TemperatureInput';

export const TemperatureDegreeContainer = ({
  temperature,
  handleTemperature,
}) => {
  return (
    <View style={styles.container}>
      <TemperatureInput
        temperature={temperature}
        handleTemperature={handleTemperature}
      />
      <Text style={styles.degree}>°C</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  degree: {
    fontSize: css.size.text16,
  },
});
