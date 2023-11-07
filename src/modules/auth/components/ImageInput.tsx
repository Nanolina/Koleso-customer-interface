import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import { colors, css, sizes } from '../../../consts';

interface IImageInputProps {
  placeholder: string;
  icon: JSX.Element;
  value: string;
  onChangeText: (text: string) => void;
  secureTextEntry?: boolean;
  autoComplete?: string;
  inputMode?: string;
}

export const ImageInput: React.FC<IImageInputProps> = ({
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
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.main,
    borderRadius: css.borderRadiusMin,
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
