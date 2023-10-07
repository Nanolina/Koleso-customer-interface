import { StyleSheet, View } from 'react-native';
import { css } from '../../../consts';
import { GradientTemperatureSign } from '../ui/GradientTemperatureSign';
import { TemperatureSign } from '../ui/TemperatureSign';

export const ToggleContainer = ({
  temperatureToggle,
  handleTemperatureToggle,
}) => {
  return (
    <View style={styles.container}>
      {temperatureToggle === '+' ? (
        <GradientTemperatureSign
          type="left"
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
        <GradientTemperatureSign
          type="right"
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
    borderColor: css.colors.border,
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
});
