import React from 'react';
import { StyleSheet, View } from 'react-native';
import { ImageContainer } from '../../../components/ImageContainer';
import { TextInfoContainer } from '../../../components/TextInfoContainer';
import { css } from '../../../consts';
import { BottomText } from '../ui/BottomText';
import { UpperText } from '../ui/UpperText';

export const ItemFromMyRequests = ({ item }) => {
  return (
    <View style={css.return.container}>
      <UpperText
        number={item.return.number}
        date={item.return.date}
        text="Return request from"
      />
      <View style={styles.centerContainer}>
        <ImageContainer image={item.image} />
        <TextInfoContainer item={item} />
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
