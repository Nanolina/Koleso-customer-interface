import { StyleSheet, Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import {
  handleTemperatureFrom,
  handleTemperatureTo,
  toggleTemperatureFrom,
  toggleTemperatureTo,
} from '../../../../redux/slices/filterSlice';
import { css } from '../../../consts';
import { TemperatureToggle } from './TemperatureToggle';

export const Wheather = () => {
  const {
    temperatureFrom,
    temperatureTo,
    temperatureFromToggle,
    temperatureToToggle,
  } = useSelector((state: any) => state.filter);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Temperature</Text>
      <View style={styles.temperatureContainer}>
        <TemperatureToggle
          text="From"
          temperatureToggle={temperatureFromToggle}
          setTemperatureToggle={toggleTemperatureFrom}
          searchTemperature={temperatureFrom}
          setSearchTemperature={handleTemperatureFrom}
        />
        <TemperatureToggle
          text="To"
          temperatureToggle={temperatureToToggle}
          setTemperatureToggle={toggleTemperatureTo}
          searchTemperature={temperatureTo}
          setSearchTemperature={handleTemperatureTo}
        />
      </View>
      {/* <View>
        <WheatherConditions />
      </View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: css.padding,
    paddingVertical: css.padding,
    gap: 20,
  },
  title: {
    fontWeight: 'bold',
    fontSize: css.size.text16,
    marginBottom: 15,
    textAlign: 'center',
  },
  temperatureContainer: {
    gap: 20,
    paddingBottom: 20,
  },
});
