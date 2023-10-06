import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { css } from '../../../../consts';

const MissingSizeBox = ({ size }) => {
  return (
    <View style={styles.box}>
      <Text style={styles.text}>{size}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    backgroundColor: 'rgba(0,0,0,0.1)',
    alignItems: 'center',
    justifyContent: 'center',
    ...css.item.size.box,
  },
  text: {
    fontWeight: 'bold',
    fontSize: css.size.text16,
  },
});

export default React.memo(MissingSizeBox);
