import { StyleSheet, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import {
  handleTemperatureFrom,
  handleTemperatureTo,
  resetAllWheather,
  toggleTemperatureFrom,
  toggleTemperatureTo,
} from '../../../../../redux/slices/filterSlice';
import { css } from '../../../../consts';
import { ButtonGradient } from '../../../../ui/ButtonGradient';
import { TemperatureToggle } from './TemperatureToggle';
import { WheatherConditions } from './WheatherConditions';

export const Wheather = () => {
  const {
    temperatureFrom,
    temperatureTo,
    temperatureFromToggle,
    temperatureToToggle,
  } = useSelector((state: any) => state.filter);

  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <ButtonGradient
          text="Reset all"
          onPress={() => dispatch(resetAllWheather())}
        />
      </View>
      <Text style={styles.title}>Temperature</Text>
      <View style={styles.temperatureContainer}>
        <TemperatureToggle
          text="From"
          temperatureToggle={temperatureFromToggle}
          handleTemperatureToggle={toggleTemperatureFrom}
          temperature={temperatureFrom}
          handleTemperature={handleTemperatureFrom}
        />
        <TemperatureToggle
          text="To"
          temperatureToggle={temperatureToToggle}
          handleTemperatureToggle={toggleTemperatureTo}
          temperature={temperatureTo}
          handleTemperature={handleTemperatureTo}
        />
      </View>

      <WheatherConditions />
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
    fontSize: css.size.text20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  temperatureContainer: {
    gap: 20,
    paddingBottom: 20,
  },
  buttonContainer: {
    alignSelf: 'flex-end',
  },
});
