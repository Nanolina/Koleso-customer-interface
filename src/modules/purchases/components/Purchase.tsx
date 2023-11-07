import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Dimensions, Platform, StyleSheet, View } from 'react-native';
import { PriceContainer } from '../../../components/PriceContainer';
import { css } from '../../../consts';
import { Button } from '../../../ui/Button';
import { ImageContainer } from './ImageContainer';
import { TextContainer } from './TextContainer';

const { width } = Dimensions.get('window');
const cardWidth = width / 3;

export const Purchase = ({ item }) => {
  const navigation: any = useNavigation();

  return (
    <View style={styles.container}>
      <ImageContainer image={item.image} />
      <TextContainer item={item} />
      <PriceContainer
        price={item.price}
        priceSize={css.size.text16}
        hasBackground={false}
      />

      {!item.return && (
        <View style={styles.buttonContainer}>
          <Button
            text="Make a return"
            backgroundColor={css.colors.white}
            textColor={css.colors.main}
            width="90%"
            onPress={() =>
              navigation.navigate('OrderProcessingPage', {
                title: 'Return',
                item,
              })
            }
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 4,
    paddingBottom: 5,
    maxWidth: Platform.OS === 'web' ? cardWidth : '100%',
    backgroundColor: css.colors.lightPink,
    borderRadius: css.borderRadiusMax,
  },
  buttonContainer: {
    paddingTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
