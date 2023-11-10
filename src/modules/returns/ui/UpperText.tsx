import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { IUpperTextProps } from '../types';

export const UpperText: React.FC<IUpperTextProps> = React.memo(
  ({ number, date, text }) => {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>№{number}</Text>
        <Text>
          {text}&nbsp;
          <Text style={styles.text}>{date}</Text>
        </Text>
      </View>
    );
  }
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text: {
    fontWeight: 'bold',
  },
});
