import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from '../ui/Button';
import { css } from '../consts';

export const ButtonsGroup = ({ options, currentState, toggleFunction, slice }) => {
  const currentValue = useSelector((state) => state[slice][currentState]);
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      {options.map((option) => (
        <Button
          key={option.value}
          text={option.text}
          onPress={() => dispatch(toggleFunction(option.value))}
          style={[
            styles.button,
            currentValue === option.value && styles.activeButton,
          ]}
          width="40%"
          border={currentValue !== option.value}
          backgroundColor={
            currentValue !== option.value ? css.colors.white : ''
          }
          textColor={currentValue !== option.value ? css.colors.black : ''}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  button: {
    width: css.size.buttonWidth,
  },
  activeButton: {
    // Style for the active button
  },
});
