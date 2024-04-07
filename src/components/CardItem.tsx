import React, { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { Image, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Dimensions } from 'react-native';
import { sizes } from '../consts';
import { CardItemProps } from '../types';
import { WebCardWrapper } from '../ui/WebCardWrapper';

const { width } = Dimensions.get('window');

export const CardItem: React.FC<CardItemProps> = React.memo(
  ({ image, title, onPress, translationKey }) => {
    const { t } = useTranslation();

    const handlePress = useCallback(() => {
      if (onPress) {
        onPress();
      }
    }, [onPress]);

    return (
      <WebCardWrapper cardWidth={width}>
        <TouchableOpacity style={styles.container} onPress={handlePress}>
          <Image source={image} style={styles.image} />
          <Text style={styles.text}>{t(`${translationKey}.${title}`)}</Text>
        </TouchableOpacity>
      </WebCardWrapper>
    );
  }
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  image: {
    resizeMode: 'cover',
    width: 50,
    height: 50,
    borderRadius: 12,
  },
  text: {
    fontWeight: 'bold',
    fontSize: sizes.text16,
  },
});
