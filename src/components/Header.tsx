import React from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import { colors } from '../consts';
import { Gradient } from '../ui/Gradient';
import { SearchBar } from './SearchBar';

const { width, height } = Dimensions.get('window');
const headerHeight = height / 7;

export const Header: React.FC = () => (
  <View style={styles.header}>
    <Gradient type="header" />
    <Text style={styles.headerText}>Main</Text>
    <SearchBar />
  </View>
);

const styles = StyleSheet.create({
  header: {
    height: headerHeight,
    justifyContent: 'center',
    alignItems: 'center',
    width: width,
    paddingBottom: 15,
    paddingLeft: 15,
    paddingRight: 15,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    position: 'relative',
  },
  headerText: {
    fontSize: 24,
    fontFamily: 'OpenSans_700Bold',
    color: colors.white,
    textShadowOffset: { width: -3, height: -2 },
    textShadowRadius: 1,
    textShadowColor: colors.border,
  },
});
