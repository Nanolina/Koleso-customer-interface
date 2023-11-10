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
import { css, sizes } from '../../../consts';
import { IItemProps } from '../../../types';
import { WebCardWrapper } from '../../../ui/WebCardWrapper';
import { PriceContainer } from '../../price';
import { ImageContainer } from './ImageContainer';
import { TitleContainer } from './TitleContainer';

const { width } = Dimensions.get('window');
const cardWidth = width / 3;

export const ProductCard: React.FC<{ item: IItemProps }> = React.memo(
  ({ item }) => {
    const navigation: NavigationProp<ParamListBase> = useNavigation();

    const onPress = useCallback(() => {
      navigation.navigate('ItemPage', { item });
    }, [navigation, item]);

    return (
      <WebCardWrapper cardWidth={cardWidth}>
        <TouchableOpacity style={styles.card} onPress={onPress}>
          <ImageContainer image={item.image} />
          <PriceContainer
            price={item.price}
            oldPrice={item.oldPrice}
            priceSize={sizes.text20}
          />
          <TitleContainer seller={item.seller} title={item.title} />
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
    maxWidth: Platform.OS === 'web' ? cardWidth : '100%',
  },
});
