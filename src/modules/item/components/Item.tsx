import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { css } from '../../../consts';
import { PriceContainer } from './PriceContainer';
import { TitleContainer } from './TitleContainer';

export const Item = ({ item }) => {
  return (
    <ScrollView style={styles.container}>
      <PriceContainer price={item.price} oldPrice={item.oldPrice} />
      <TitleContainer title={item.title} seller={item.seller} />
      <Text>
        <Text style={styles.label}>Color:</Text> {item.color}
      </Text>
      <Text>
        <Text style={styles.label}>Composition:</Text> {item.composition}
      </Text>
      <Text>
        <Text style={styles.label}>Gender:</Text> {item.gender}
      </Text>
      <Text>
        <Text style={styles.label}>Size:</Text> {item.size}
      </Text>
      <View style={styles.sizeBoxesContainer}>
        {Array.from({ length: 16 }, (_, index) => (
          <View style={styles.sizeBox} key={index}>
            <Text>{35 + index}</Text>
          </View>
        ))}
      </View>
      <Text numberOfLines={2} ellipsizeMode="tail">
        {item.description} <Text style={styles.more}>more</Text>
      </Text>
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
  label: {
    fontWeight: 'bold',
  },
  sizeBoxesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: 10,
    marginHorizontal: 10,
  },
  sizeBox: {
    borderWidth: 1,
    borderColor: 'transparent',
    borderRadius: 5,
    backgroundColor: 'rgba(0,0,0,0.1)', // Placeholder gradient. Consider using a gradient library.
    padding: 5,
    marginVertical: 5,
    alignItems: 'center',
    justifyContent: 'center',
    width: 40,
  },
  more: {
    color: 'blue',
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
