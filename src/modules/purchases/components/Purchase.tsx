import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from '@react-navigation/native';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Dimensions, Platform, StyleSheet, View } from 'react-native';
import { colors, css, sizes } from '../../../consts';
import { IItemProps } from '../../../types';
import { Button } from '../../../ui/Button';
import { PriceContainer } from '../../price';
import { ImageContainer } from './ImageContainer';
import { TextContainer } from './TextContainer';

const { width } = Dimensions.get('window');
const cardWidth = width / 3;

export const Purchase: React.FC<{ item: IItemProps }> = React.memo(
  ({ item }) => {
    const { t } = useTranslation('translation', { keyPrefix: 'purchases' });
    const navigation: NavigationProp<ParamListBase> = useNavigation();

    const handlePress = React.useCallback(() => {
      navigation.navigate('OrderProcessingPage', {
        title: 'Return',
        item,
      });
    }, [navigation, item]);

    return (
      <View style={styles.container}>
        <ImageContainer image={item.image} />
        <TextContainer item={item} />
        <PriceContainer price={item.price} priceSize={sizes.text16} />

        {!item.return && (
          <View style={styles.buttonContainer}>
            <Button
              text={t('makeReturn')}
              backgroundColor={colors.white}
              textColor={colors.main}
              border={false}
              isBold={false}
              width="90%"
              hasShadow
              onPress={handlePress}
            />
          </View>
        )}
      </View>
    );
  }
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 4,
    paddingBottom: 5,
    maxWidth: Platform.OS === 'web' ? cardWidth : '100%',
    backgroundColor: colors.white,
    borderRadius: css.borderRadiusMax,
    ...css.shadow,
  },
  buttonContainer: {
    marginTop: 10,
    paddingVertical: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
