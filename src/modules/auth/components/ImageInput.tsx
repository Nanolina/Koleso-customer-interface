import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import { css } from '../../../consts';

export const ImageInput = ({
  placeholder,
  icon,
  value,
  onChangeText,
  inputMode = 'text',
  secureTextEntry,
  autoComplete,
  isTwoIcons,
}: any) => {
  const styles = getStyles(isTwoIcons);

  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>{icon}</View>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        inputMode={inputMode}
        secureTextEntry={secureTextEntry}
        autoComplete={autoComplete}
      />
    </View>
  );
};

const getStyles = (isTwoIcons) =>
  StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      borderWidth: 1,
      borderColor: css.colors.main,
      borderRadius: css.borderRadiusMin,
    },
    iconContainer: {
      paddingHorizontal: 10,
    },
    input: {
      flex: 1,
      padding: isTwoIcons ? 0 : 20,
      fontSize: css.size.text16,
      color: css.colors.black,
      height: 40,
    },
  });
