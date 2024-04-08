import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';
import { colors, css, sizes } from '../../../consts';
import { ValidationError } from '../../../ui/ValidationError';
import { IImageInputProps } from '../types';

export const ImageInput: React.FC<IImageInputProps> = React.memo(
  ({
    name,
    placeholder,
    icon,
    value,
    inputMode = 'text',
    maxLength,
    secureTextEntry,
    autoComplete,
    onChangeText,
    errors,
    touched,
    onBlur,
  }: any) => {
    const [isSecureEntry, setIsSecureEntry] = useState(secureTextEntry);

    return (
      <View style={styles.mainContainer}>
        <View style={styles.iconInputContainer}>
          <View style={styles.iconContainer}>{icon}</View>
          <TextInput
            style={styles.input}
            placeholder={placeholder}
            value={value}
            onChangeText={onChangeText}
            inputMode={inputMode}
            maxLength={maxLength}
            secureTextEntry={isSecureEntry}
            autoComplete={autoComplete}
            onBlur={onBlur}
          />
          {secureTextEntry && (
            <TouchableOpacity
              style={styles.iconContainer}
              onPress={() => setIsSecureEntry(!isSecureEntry)}
            >
              <Ionicons
                name={isSecureEntry ? 'eye-off' : 'eye'}
                size={sizes.iconSizeMin}
                color={colors.mainOpacity}
              />
            </TouchableOpacity>
          )}
        </View>
        {errors[name] && touched[name] && (
          <ValidationError error={errors[name]} />
        )}
      </View>
    );
  }
);

const styles = StyleSheet.create({
  mainContainer: {
    alignItems: 'center',
    gap: 10,
  },
  iconInputContainer: {
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
