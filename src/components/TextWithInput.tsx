import { StyleSheet, Text, TextInput, View } from 'react-native';
import { css } from '../consts';

export const TextWithInput = ({
  text,
  value,
  onChangeText,
  width,
  onFocus,
  inputMode = 'text',
  secureTextEntry,
  autoComplete,
}: any) => {
  const styles = getStyles(width);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{text}</Text>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
        onFocus={onFocus}
        inputMode={inputMode}
        secureTextEntry={secureTextEntry}
        autoComplete={autoComplete}
      />
    </View>
  );
};

const getStyles = (width) =>
  StyleSheet.create({
    container: {
      gap: 10,
      width: width || '100%',
    },
    input: {
      backgroundColor: css.colors.lightGray,
      borderRadius: css.borderRadiusMin,
      textAlign: 'center',
      fontSize: css.size.text16,
      color: css.colors.main,
      height: 40,
    },
    text: {
      fontSize: css.size.text16,
      fontWeight: 'bold',
      textAlign: 'center',
    },
  });
