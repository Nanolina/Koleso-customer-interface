import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { css } from '../../../consts';
import { Description } from './Description';
import { PriceContainer } from './PriceContainer';
import { Properties } from './Properties';
import SizeContainer from './SizeContainer';
import { TitleContainer } from './TitleContainer';

export const Item = ({ item }) => {
  return (
    <ScrollView style={styles.container}>
      <PriceContainer price={item.price} oldPrice={item.oldPrice} />
      <TitleContainer title={item.title} seller={item.seller} />
      <Properties
        color={item.color}
        composition={item.composition}
        gender={item.gender}
        size={item.size}
      />
      <SizeContainer
        itemSize={item.size}
        possibleSizes={item.possibleSizes}
        missingSizes={item.missingSizes}
      />
      {item.description && <Description description={item.description} />}
      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.buyNowButton}>
          <Text style={styles.buttonText}>Buy now</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.addToCartButton}>
          <Text style={styles.buttonText}>Add to cart</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: css.padding,
    paddingVertical: css.padding,
  },
  topIcons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
    marginHorizontal: 10,
  },
  backIconContainer: {
    backgroundColor: '#DFDADA',
    padding: 10,
    borderRadius: 5,
  },
  rightIconContainer: {
    flexDirection: 'row',
    backgroundColor: '#DFDADA',
    padding: 10,
    borderRadius: 15,
    justifyContent: 'space-between',
    width: 90,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    marginHorizontal: 10,
  },
  buyNowButton: {
    backgroundColor: 'rgba(7, 214, 15, 0.55)',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
    borderRadius: 5,
    marginRight: 10,
  },
  addToCartButton: {
    backgroundColor: 'transparent', // Placeholder. Consider using a gradient library.
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
    borderRadius: 5,
  },
  buttonText: {
    fontWeight: 'bold',
    color: 'black',
  },
});
