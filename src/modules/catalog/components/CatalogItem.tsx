import React from 'react';
import { useTranslation } from 'react-i18next';
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import { css } from '../../../consts';
import { WebCardWrapper } from '../../../ui/WebCardWrapper';
import { ICatalogItemProps } from '../types';

const { width } = Dimensions.get('window');

export const CatalogItem: React.FC<ICatalogItemProps> = React.memo(
  ({ item, onPress }) => {
    const { t } = useTranslation('translation', { keyPrefix: 'catalog' });

    return (
      <WebCardWrapper cardWidth={width}>
        <TouchableOpacity style={styles.container} onPress={onPress}>
          <Image source={item.image} style={styles.image} />
          <Text style={styles.text}>{t(item.title)}</Text>
        </TouchableOpacity>
      </WebCardWrapper>
    );
  }
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    ...css.cards.container,
  },
  image: {
    resizeMode: 'cover',
    ...css.cards.image,
  },
  text: {
    fontWeight: 'bold',
    ...css.cards.text,
  },
});
