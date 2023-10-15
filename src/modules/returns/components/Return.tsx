import React from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import { css } from '../../../consts';
import { ImageContainer } from './ImageContainer';
import { TextContainer } from './TextContainer';
import { UpperText } from '../ui/UpperText';
import { BottomText } from '../ui/BottomText';

const { width } = Dimensions.get('window');
const cardWidth = width / 3;

export const Return = ({ item }) => {
  return (
    <View style={styles.container}>
      <UpperText number={item.return.number} date={item.return.date} />
      <View style={styles.bottomContainer}>
        <ImageContainer image={item.image} />
        <TextContainer item={item} />
      </View>
      <BottomText statusMoney={item.return.statusMoney} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: css.colors.lightPink,
    borderRadius: css.borderRadiusMax,
    gap: 10,
    padding: 10,
  },
  bottomContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
});
