import React, { useState } from 'react';
import {
  Dimensions,
  Keyboard,
  SafeAreaView,
  StyleSheet,
  View,
} from 'react-native';
import { Button } from '../ui/Button';
import { ButtonBack } from '../ui/ButtonBack';
import { GradientHeaderFooter } from '../ui/GradientHeaderFooter';
import { SearchBar } from './SearchBar';

const { width, height } = Dimensions.get('window');
const headerHeight = height / 8;

export const Header = ({ searchOn = false, setSearchOn }) => {
  const [searchText, setSearchText] = useState('');

  return (
    <View style={styles.container}>
      <GradientHeaderFooter type="header" />
      <SafeAreaView style={styles.searchBarContainer}>
        {searchOn && (
          <ButtonBack
            onPress={() => {
              setSearchOn(false);
              setSearchText('');
              Keyboard.dismiss();
            }}
          />
        )}

        <SearchBar
          searchOn={searchOn}
          setSearchOn={setSearchOn}
          searchText={searchText}
          setSearchText={setSearchText}
        />

        {searchOn && (
          <Button text="Search" onPress={() => console.log('Search')} />
        )}
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width,
    height: headerHeight,
    justifyContent: 'space-around',
    paddingLeft: 15,
    paddingRight: 15,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    position: 'relative',
  },
  searchBarContainer: {
    width: '100%',
    paddingTop: 30,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    justifyContent: 'center',
  },
});
