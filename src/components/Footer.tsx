import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {
  Dimensions,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import { IconFooter } from '../ui/IconFooter';
import { css } from '../consts';

const { height } = Dimensions.get('window');
const footerHeight = height / 10;

export const Footer: React.FC<any> = () => {
  const navigation: any = useNavigation();

  return (
    <View style={styles.footer}>
      <SafeAreaView style={styles.iconContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <IconFooter name="home" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('SectionsPage')}>
          <IconFooter name="search" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('NotificationsPage')}
        >
          <IconFooter name="notifications" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('CartPage')}>
          <IconFooter name="shopping-cart" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Favorites')}>
          <IconFooter name="favorite" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('MyAccount')}>
          <IconFooter name="person" />
        </TouchableOpacity>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    height: footerHeight,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    position: 'relative',
    backgroundColor: css.colors.main,
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
});
