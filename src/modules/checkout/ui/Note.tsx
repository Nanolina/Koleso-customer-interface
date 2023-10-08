import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { css } from '../../../consts';

export const Note = ({ value, onChangeText }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Note</Text>
      <TextInput
        style={styles.textArea}
        multiline={true}
        numberOfLines={4}
        placeholder="Write wishes for the store or courier..."
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
    borderColor: css.colors.main,
    borderWidth: 1,
    padding: 10,
    borderRadius: 8,
  },
  text: {
    fontSize: css.size.text16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
