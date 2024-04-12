import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { colors, css, sizes } from '../consts';
import { ILabelWithInputProps } from '../types';
import { ValidationError } from '../ui/ValidationError';

export const LabelWithInput: React.FC<ILabelWithInputProps> = React.memo(
  ({
    name,
    placeholder,
    maxLength,
    label,
    value,
    onChangeText,
    width,
    onFocus,
    inputMode = 'text',
    secureTextEntry,
    autoComplete,
    errors,
    touched,
    onBlur,
    extra,
  }: any) => {
    return (
      <View style={[styles.container, { width: width || '100%' }]}>
        <Text style={styles.label}>{label}</Text>
        {extra && <Text style={styles.extra}>{extra}</Text>}
        <TextInput
          style={styles.input}
          placeholder={placeholder}
          value={value}
          onChangeText={onChangeText}
          onFocus={onFocus}
          inputMode={inputMode}
          maxLength={maxLength}
          secureTextEntry={secureTextEntry}
          autoComplete={autoComplete}
          onBlur={onBlur}
        />
        {errors[name] && touched[name] && (
          <ValidationError error={errors[name]} />
        )}
      </View>
    );
  }
);

const styles = StyleSheet.create({
  container: {
    gap: 20,
  },
  input: {
    borderRadius: css.borderRadiusMin,
    textAlign: 'center',
    fontSize: sizes.text16,
    color: colors.main,
    height: 40,
    ...css.shadow,
  },
  label: {
    fontSize: sizes.text20,
    color: colors.main,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  extra: {
    fontSize: sizes.text15,
  },
});
