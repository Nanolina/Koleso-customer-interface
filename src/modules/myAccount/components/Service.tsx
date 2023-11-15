import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from '@react-navigation/native';
import React, { useCallback } from 'react';
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
import { IService } from '../types';

const { width } = Dimensions.get('window');

export const Service: React.FC<{ service: IService }> = React.memo(
  ({ service }) => {
    const { t } = useTranslation();
    const navigation: NavigationProp<ParamListBase> = useNavigation();

    const onPress = useCallback(() => {
      navigation.navigate(service.redirectPage);
    }, [navigation, service.redirectPage]);

    return (
      <WebCardWrapper cardWidth={width}>
        <TouchableOpacity style={styles.container} onPress={onPress}>
          <Image source={service.image} style={styles.image} />
          <Text style={styles.text}>{t(`myAccount.${service.title}`)}</Text>
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
