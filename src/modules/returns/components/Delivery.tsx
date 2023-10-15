import React from 'react';
import { StyleSheet, View } from 'react-native';
import { css } from '../../../consts';
import { ButtonsBottom } from '../ui/ButtonsBottom';
import { UpperText } from '../ui/UpperText';
import { ImageContainer } from './ImageContainer';
import { TextContainer } from './TextContainer';

export const Delivery = ({ item }) => {
  return (
    <View style={styles.container}>
      <UpperText number={item.delivery.number} date={item.delivery.date} />
      <View style={styles.centerContainer}>
        <ImageContainer image={item.image} />
        <TextContainer item={item} />
      </View>
      <ButtonsBottom />
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
  centerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
});
