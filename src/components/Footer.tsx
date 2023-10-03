import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {
  Dimensions,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import { GradientHeaderFooter } from '../ui/GradientHeaderFooter';
import { IconFooter } from '../ui/IconFooter';

const { width, height } = Dimensions.get('window');
const footerHeight = height / 10;

export const Footer: React.FC<any> = () => {
  const navigation: any = useNavigation();

  return (
    <View style={styles.footer}>
      <GradientHeaderFooter type="footer" />
      <SafeAreaView style={styles.iconContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <IconFooter name="home" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Catalog')}>
          <IconFooter name="search" />
        </TouchableOpacity>
        <IconFooter name="notifications" />
        <IconFooter name="shopping-cart" />
        <IconFooter name="favorite" />
        <IconFooter name="person" />
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    height: footerHeight,
    justifyContent: 'center',
    alignItems: 'center',
    width: width,
    padding: 10,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    position: 'relative',
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
