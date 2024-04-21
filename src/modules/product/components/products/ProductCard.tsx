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
import { IProductCardProps } from '../../types';
import { ImageContainer } from './ImageContainer';
import { TitleContainer } from './TitleContainer';

const { width } = Dimensions.get('window');
const cardWidth = width / 3;

export const ProductCard: React.FC<IProductCardProps> = React.memo(
  ({ product }) => {
    const dispatch = useDispatch<AppDispatch>();
    const navigation: NavigationProp<ParamListBase> = useNavigation();

    const onPress = useCallback(() => {
      dispatch(handleGetProductById(product.id));
      navigation.navigate('ProductPage', { productId: product.id });
    }, [navigation, product]);

    return (
      <WebCardWrapper cardWidth={cardWidth}>
        <TouchableOpacity style={styles.card} onPress={onPress}>
          <ImageContainer image={product.variants[0].images[0].url} />
          <PriceContainer
            finalPrice={product.variants[0].finalPrice}
            priceWithoutDiscount={product.variants[0].priceWithoutDiscount}
            priceSize={sizes.text20}
          />
          <TitleContainer seller={product.store.name} title={product.name} />
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
