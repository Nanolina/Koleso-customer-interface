import React from 'react';
import { StyleSheet, View } from 'react-native';
import { css } from '../../../consts';
import { BottomText } from '../ui/BottomText';
import { UpperText } from '../ui/UpperText';
import { ImageContainer } from './ImageContainer';
import { TextContainer } from './TextContainer';

export const Return = ({ item }) => {
  return (
    <View style={css.return.container}>
      <UpperText number={item.return.number} date={item.return.date} />
      <View style={styles.centerContainer}>
        <ImageContainer image={item.image} />
        <TextContainer item={item} />
      </View>
      <BottomText statusMoney={item.return.statusMoney} />
    </View>
  );
};

const styles = StyleSheet.create({
  centerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    ...css.return.centerContainer,
  },
});
