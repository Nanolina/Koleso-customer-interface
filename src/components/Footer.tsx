import React from 'react';
import { Dimensions, SafeAreaView, StyleSheet, View } from 'react-native';
import { Gradient } from '../ui/Gradient';
import { IconFooter } from '../ui/IconFooter';

const { width, height } = Dimensions.get('window');
const footerHeight = height / 10;

export const Footer: React.FC = () => (
  <View style={styles.footer}>
    <Gradient type="footer" />
    <SafeAreaView style={styles.iconContainer}>
      <IconFooter name="home" />
      <IconFooter name="search" />
      <IconFooter name="notifications" />
      <IconFooter name="shopping-cart" />
      <IconFooter name="favorite" />
      <IconFooter name="person" />
    </SafeAreaView>
  </View>
);

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
