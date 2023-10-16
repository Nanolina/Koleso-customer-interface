import React from 'react';
import { StyleSheet, View } from 'react-native';
import { css } from '../../../consts';
import { ButtonsBottom } from '../ui/ButtonsBottom';
import { UpperText } from '../ui/UpperText';
import { ImageContainer } from './ImageContainer';
import { TextContainer } from './TextContainer';

export const ItemFromCreateRequest = ({ item }) => {
  return (
    <View style={css.return.container}>
      <UpperText number={item.delivery.number} date={item.delivery.date} />
      <View style={styles.centerContainer}>
        <ImageContainer image={item.image} />
        <TextContainer item={item} />
      </View>
      <ButtonsBottom item={item} />
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
