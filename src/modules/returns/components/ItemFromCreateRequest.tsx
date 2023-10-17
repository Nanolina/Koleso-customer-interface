import React from 'react';
import { StyleSheet, View } from 'react-native';
import { css } from '../../../consts';
import { QuantityContainer } from '../../cart';
import { ButtonsBottom } from '../ui/ButtonsBottom';
import { UpperText } from '../ui/UpperText';
import { ImageContainer } from './ImageContainer';
import { TextContainer } from './TextContainer';

export const ItemFromCreateRequest = ({ item, quantity = false }) => {
  return (
    <View style={css.return.container}>
      <UpperText number={item.delivery.number} date={item.delivery.date} />
      <View style={styles.centerContainer}>
        <ImageContainer image={item.image} />
        <TextContainer item={item} />
      </View>
      {quantity ? (
        <QuantityContainer quantity={1} />
      ) : (
        <ButtonsBottom item={item} />
      )}
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
