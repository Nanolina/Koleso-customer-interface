import React from 'react';
import { Dimensions, SafeAreaView, StyleSheet, View } from 'react-native';
import { Gradient } from '../ui/Gradient';
import { SearchBar } from './SearchBar';

const { width, height } = Dimensions.get('window');
const headerHeight = height / 8;

export const Header: React.FC = () => {
  return (
    <View style={styles.container}>
      <Gradient type="header" />
      <SafeAreaView style={styles.searchBarContainer}>
        <SearchBar />
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: headerHeight,
    justifyContent: 'center',
    alignItems: 'center',
    width: width,
    paddingLeft: 15,
    paddingRight: 15,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    position: 'relative',
  },
  searchBarContainer: {
    width: '100%',
    paddingTop: 10,
  },
});
