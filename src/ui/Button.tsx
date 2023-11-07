import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { colors, css, sizes } from '../consts';

interface IButtonProps {
  text: any;
  onPress: () => void;
  width?: string | number;
  backgroundColor?: string;
  border?: boolean;
  textColor?: string;
  isBold?: boolean;
  extra?: string;
}

export const Button: React.FC<IButtonProps> = ({
  text,
  onPress,
  width = '100%',
  backgroundColor = colors.orange,
  border = false,
  textColor = colors.white,
  isBold = true,
  extra,
}: any) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.container,
        {
          width,
          backgroundColor,
          borderColor: border ? colors.main : undefined,
        },
      ]}
    >
      <Text
        style={[
          styles.text,
          { color: textColor, fontWeight: isBold ? 'bold' : 'normal' },
        ]}
      >
        {text}
      </Text>
      {extra && <Text style={styles.extra}>{extra}</Text>}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: css.borderRadiusMax,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  text: {
    fontSize: sizes.text16,
    textAlign: 'center',
  },
  extra: {
    fontSize: sizes.text15,
    color: colors.white,
  },
});
