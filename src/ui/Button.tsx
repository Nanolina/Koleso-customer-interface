import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { colors, css, sizes } from '../consts';
import { IButtonProps } from '../types';

export const Button: React.FC<IButtonProps> = React.memo(
  ({
    text,
    onPress,
    width = '100%',
    backgroundColor = colors.orange,
    border = false,
    textColor = colors.white,
    isBold = true,
    hasShadow = false,
    extra,
    disabled,
    isLink = false,
  }: any) => {
    return (
      <TouchableOpacity
        onPress={onPress}
        disabled={disabled}
        style={[
          styles.container,
          isLink
            ? styles.link
            : {
                width,
                backgroundColor: disabled ? colors.lightGray : backgroundColor,
                borderWidth: border ? 1 : 0,
                borderColor: border ? colors.main : undefined,
                ...(hasShadow && {
                  ...css.shadow,
                  shadowRadius: 4,
                }),
              },
        ]}
      >
        <Text
          style={[
            styles.text,
            isLink
              ? styles.linkText
              : {
                  color: textColor,
                  fontWeight: isBold ? 'bold' : 'normal',
                },
          ]}
        >
          {text}
        </Text>
        {extra && <Text style={styles.extra}>{extra}</Text>}
      </TouchableOpacity>
    );
  }
);

const styles = StyleSheet.create({
  container: {
    borderRadius: css.borderRadiusMax,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  text: {
    fontSize: sizes.text16,
    textAlign: 'center',
  },
  extra: {
    fontSize: sizes.text15,
    color: colors.white,
  },
  link: {
    backgroundColor: 'transparent',
  },
  linkText: {
    textDecorationLine: 'underline',
    color: '#00439d',
    fontWeight: 'normal',
  },
});
