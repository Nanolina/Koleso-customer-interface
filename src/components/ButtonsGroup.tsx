import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { colors, css } from '../consts';

export const ButtonsGroup = ({
  options,
  currentState,
  toggleFunction,
  slice,
}) => {
  const currentValue = useSelector((state) => state[slice][currentState]);
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <View style={styles.buttonsBackground}>
        {options.map((option) => (
          <TouchableOpacity
            key={option.value}
            onPress={() => dispatch(toggleFunction(option.value))}
            style={[
              styles.button,
              currentValue === option.value && styles.buttonActive,
            ]}
          >
            <Text
              style={[
                styles.buttonText,
                currentValue === option.value
                  ? styles.textActive
                  : styles.textInactive,
              ]}
            >
              {option.text}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  buttonsBackground: {
    flexDirection: 'row',
    backgroundColor: colors.lightGray,
    borderRadius: css.borderRadiusMax,
  },
  button: {
    flex: 1,
    paddingVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: css.borderRadiusMax,
  },
  buttonActive: {
    backgroundColor: colors.white,
    margin: 2,
    borderRadius: css.borderRadiusMax - 2,
  },
  buttonText: {
    fontSize: css.size.text16,
  },
  textActive: {
    color: colors.main,
  },
  textInactive: {
    color: colors.black,
  },
});
