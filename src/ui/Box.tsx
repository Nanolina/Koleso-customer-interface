import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { css, sizes } from '../consts';

const Box = ({ label, onPress, boxStyle, textStyle }: any) => {
  return onPress ? (
    <TouchableOpacity style={[styles.box, boxStyle]} onPress={onPress}>
      <Text style={[styles.text, textStyle]}>{label}</Text>
    </TouchableOpacity>
  ) : (
    <View style={[styles.box, boxStyle]}>
      <Text style={[styles.text, textStyle]}>{label}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    borderRadius: css.borderRadiusMin,
  },
  text: {
    fontSize: sizes.text16,
  },
});

export default React.memo(Box);
