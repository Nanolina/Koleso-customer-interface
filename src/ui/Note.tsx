import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { colors, css } from '../consts';

export const Note = ({ title, placeholder, value, onChangeText }: any) => {
  return (
    <View style={styles.container}>
      {title && <Text style={styles.text}>{title}</Text>}
      <TextInput
        style={styles.textArea}
        multiline={true}
        numberOfLines={4}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 10,
  },
  textArea: {
    height: 100,
    padding: 10,
    borderRadius: css.borderRadiusMin,
    backgroundColor: colors.lightGray,
  },
  text: {
    fontSize: css.size.text16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
