import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {
  Dimensions,
  Platform,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { PriceContainer } from '../../../components/PriceContainer';
import { css } from '../../../consts';
import { WebCardWrapper } from '../../../ui/WebCardWrapper';
import { ImageContainer } from './ImageContainer';
import { TitleContainer } from './TitleContainer';

const { width } = Dimensions.get('window');
const cardWidth = width / 3;

export const ProductCard = ({ item }) => {
  const navigation: any = useNavigation();

  return (
    <WebCardWrapper cardWidth={cardWidth}>
      <TouchableOpacity
        style={styles.card}
        onPress={() =>
          navigation.navigate('ItemPage', {
            item,
          })
        }
      >
        <ImageContainer image={item.image} />
        <PriceContainer
          price={item.price}
          oldPrice={item.oldPrice}
          priceSize={css.size.text16}
        />
        <TitleContainer seller={item.seller} title={item.title} />
      </TouchableOpacity>
    </WebCardWrapper>
  );
};

const styles = StyleSheet.create({
  card: {
    flex: 1,
    gap: 4,
    paddingHorizontal: Platform.OS === 'web' ? 20 : 2.5,
    paddingBottom: 20,
    maxWidth: Platform.OS === 'web' ? cardWidth : '100%',
  },
});
