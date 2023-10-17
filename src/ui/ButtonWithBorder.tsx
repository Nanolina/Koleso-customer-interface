import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { css } from '../consts';
import { Gradient } from './Gradient';

export const ButtonWithBorder = ({
  text,
  onPress,
  styleText,
  widthBox,
  heightBox,
  children,
}: any) => {
  const styles = getStyles(widthBox, heightBox);

  return (
    <Gradient style={styles.gradientBox}>
      <TouchableOpacity style={styles.box} onPress={onPress}>
        {children || (
          <Text style={styleText ? styleText : styles.text}>{text}</Text>
        )}
      </TouchableOpacity>
    </Gradient>
  );
};

const getStyles = (widthBox, heightBox) =>
  StyleSheet.create({
    gradientBox: {
      alignItems: 'center',
      justifyContent: 'center',
      width: widthBox || 150,
      height: heightBox || 40,
      borderRadius: 12,
    },
    box: {
      backgroundColor: css.colors.white,
      alignItems: 'center',
      justifyContent: 'center',
      width: widthBox ? widthBox - 5 : 145,
      height: heightBox ? heightBox - 5 : 35,
      borderRadius: 10,
    },
    text: {
      fontWeight: 'bold',
      fontSize: css.size.text16,
    },
  });
