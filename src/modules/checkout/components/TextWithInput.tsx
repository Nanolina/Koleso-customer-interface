import { StyleSheet, Text, TextInput, View } from 'react-native';
import { css } from '../../../consts';

export const TextWithInput = ({ text, value, onChangeText, width }: any) => {
  const styles = getStyles(width);
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{text}</Text>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
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
      borderWidth: 1,
      borderColor: css.colors.main,
      borderRadius: 8,
      textAlign: 'center',
      fontSize: css.size.text16,
      color: css.colors.black,
      height: 40,
    },
    text: {
      fontSize: css.size.text16,
      fontWeight: 'bold',
      textAlign: 'center',
    },
  });
