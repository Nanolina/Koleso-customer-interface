import { StyleSheet } from 'react-native';
import { css } from '../../../consts';
import { Gradient } from '../../../ui/Gradient';
import { TemperatureSign } from './TemperatureSign';

export const GradientTemperatureSign = ({
  type,
  sign,
  handleTemperatureToggle,
}) => {
  return (
    <Gradient
      style={type === 'left' ? styles.gradientLeft : styles.gradientRight}
    >
      <TemperatureSign
        sign={sign}
        handleTemperatureToggle={handleTemperatureToggle}
      />
    </Gradient>
  );
};

const styles = StyleSheet.create({
  gradientRight: {
    borderTopRightRadius: css.borderRadiusMax,
    borderBottomRightRadius: css.borderRadiusMax,
    justifyContent: 'center',
    alignItems: 'center',
  },
  gradientLeft: {
    borderTopLeftRadius: css.borderRadiusMax,
    borderBottomLeftRadius: css.borderRadiusMax,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
