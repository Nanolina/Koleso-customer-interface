import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from '@react-navigation/native';
import React, { useCallback } from 'react';
import {
  Dimensions,
  Platform,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { useDispatch } from 'react-redux';
import { css, sizes } from '../../../../consts';
import { AppDispatch } from '../../../../redux/store';
import { handleGetProductById } from '../../../../redux/thunks/product';
import { WebCardWrapper } from '../../../../ui/WebCardWrapper';
import { PriceContainer } from '../../../price';
import { IProduct } from '../../types';
import { ImageContainer } from './ImageContainer';
import { TitleContainer } from './TitleContainer';

const { width } = Dimensions.get('window');
const cardWidth = width / 3;

export const ProductCard: React.FC<{ item: IProduct }> = React.memo(
  ({ item }) => {
    const dispatch = useDispatch<AppDispatch>();
    const navigation: NavigationProp<ParamListBase> = useNavigation();

    const onPress = useCallback(() => {
      dispatch(handleGetProductById(item.id));
      navigation.navigate('ProductPage', { itemId: item.id });
    }, [navigation, item]);

    return (
      <WebCardWrapper cardWidth={cardWidth}>
        <TouchableOpacity style={styles.card} onPress={onPress}>
          <ImageContainer image={item.variants[0].images[0].url} />
          <PriceContainer
            finalPrice={item.variants[0].finalPrice}
            priceWithoutDiscount={item.variants[0].priceWithoutDiscount}
            priceSize={sizes.text20}
          />
          <TitleContainer seller={item.store.name} title={item.name} />
        </TouchableOpacity>
      </WebCardWrapper>
    );
  }
);

const styles = StyleSheet.create({
  card: {
    flex: 1,
    gap: 4,
    paddingHorizontal: Platform.OS === 'web' ? 20 : 2.5,
    paddingBottom: css.paddingBottom,
    maxWidth: Platform.OS === 'web' ? cardWidth : '50%',
  },
});
