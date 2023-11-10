import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { colors, css, sizes } from '../consts';
import { ITextWithInputProps } from '../types';

export const TextWithInput: React.FC<ITextWithInputProps> = React.memo(
  ({
    text,
    value,
    onChangeText,
    width,
    onFocus,
    inputMode = 'text',
    secureTextEntry,
    autoComplete,
  }: any) => {
    return (
      <View style={[styles.container, { width: width || '100%' }]}>
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
  }
);

const styles = StyleSheet.create({
  container: {
    gap: 10,
  },
  input: {
    borderRadius: css.borderRadiusMin,
    textAlign: 'center',
    fontSize: sizes.text16,
    color: colors.main,
    height: 40,
    ...css.shadow,
  },
  text: {
    fontSize: sizes.text16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
