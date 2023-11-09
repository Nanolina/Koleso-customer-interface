import React, { useCallback } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { colors, css, sizes } from '../../../consts';
import { getNumericData } from '../functions';

interface IRangeProps {
  text: string;
  value: string;
  onChangeText: (value: string) => { type: string; payload: number };
}

export const Range: React.FC<IRangeProps> = React.memo(
  ({ text, value, onChangeText }) => {
    const dispatch = useDispatch();

    const handleChangeText = useCallback(
      (text: string) => {
        dispatch(onChangeText(getNumericData(text)));
      },
      [onChangeText, dispatch]
    );

    return (
      <View style={styles.inputWrapper}>
        <Text style={styles.text}>{text}</Text>
        <TextInput
          keyboardType="numeric"
          style={styles.input}
          value={value}
          onChangeText={handleChangeText}
        />
      </View>
    );
  }
);

const styles = StyleSheet.create({
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: colors.main,
    borderRadius: css.borderRadiusMax,
    padding: 5,
    width: 60,
    height: 30,
    fontSize: sizes.text16,
  },
  text: {
    fontSize: sizes.text16,
    color: colors.gray,
  },
});
