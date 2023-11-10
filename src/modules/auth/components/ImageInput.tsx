import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import { colors, css, sizes } from '../../../consts';
import { IImageInputProps } from '../types';

export const ImageInput: React.FC<IImageInputProps> = React.memo(
  ({
    placeholder,
    icon,
    value,
    onChangeText,
    inputMode = 'text',
    secureTextEntry,
    autoComplete,
  }: any) => {
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
  }
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: css.borderRadiusMin,
    ...css.shadow,
  },
  iconContainer: {
    paddingHorizontal: 10,
  },
  input: {
    flex: 1,
    fontSize: sizes.text16,
    color: colors.black,
    height: 40,
  },
});
