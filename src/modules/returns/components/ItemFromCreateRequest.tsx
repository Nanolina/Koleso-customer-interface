import React from 'react';
import { StyleSheet, View } from 'react-native';
import { ImageContainer } from '../../../components/ImageContainer';
import { TextInfoContainer } from '../../../components/TextInfoContainer';
import { css } from '../../../consts';
import { QuantityContainer } from '../../cart';
import { ButtonsBottom } from '../ui/ButtonsBottom';
import { UpperText } from '../ui/UpperText';

export const ItemFromCreateRequest = ({ item, quantity = false }) => {
  return (
    <View style={css.return.container}>
      <UpperText
        number={item.delivery.number}
        date={item.delivery.date}
        text="Order from"
      />
      <View style={styles.centerContainer}>
        <ImageContainer image={item.image} />
        <TextInfoContainer item={item} />
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
