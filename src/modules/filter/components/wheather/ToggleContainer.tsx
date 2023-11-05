import { StyleSheet, View } from 'react-native';
import { css } from '../../../../consts';
import { TemperatureSign } from '../../ui/TemperatureSign';

export const ToggleContainer = ({
  temperatureToggle,
  handleTemperatureToggle,
}) => {
  return (
    <View style={styles.container}>
      {temperatureToggle === '+' ? (
        <TemperatureSign
          sign="+"
          handleTemperatureToggle={handleTemperatureToggle}
        />
      ) : (
        <TemperatureSign
          sign="+"
          handleTemperatureToggle={handleTemperatureToggle}
          style={[styles.toggle, styles.togglePlus]}
        />
      )}

      {temperatureToggle === '-' ? (
        <TemperatureSign
          sign="-"
          handleTemperatureToggle={handleTemperatureToggle}
        />
      ) : (
        <TemperatureSign
          sign="-"
          handleTemperatureToggle={handleTemperatureToggle}
          style={[styles.toggle, styles.toggleMinus]}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: 100,
  },
  toggle: {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: css.colors.main,
    padding: '10%',
  },
  togglePlus: {
    borderTopLeftRadius: css.borderRadiusMax,
    borderBottomLeftRadius: css.borderRadiusMax,
  },
  toggleMinus: {
    borderTopRightRadius: css.borderRadiusMax,
    borderBottomRightRadius: css.borderRadiusMax,
  },
});
