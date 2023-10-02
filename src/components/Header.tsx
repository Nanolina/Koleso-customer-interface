import { Octicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import {
  Dimensions,
  Keyboard,
  Platform,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import { css } from '../consts';
import { Gradient } from '../ui/Gradient';
import { SearchBar } from './SearchBar';

const { width, height } = Dimensions.get('window');
const headerHeight = height / 8;

export const Header = ({ searchOn = false, setSearchOn }) => {
  const [searchText, setSearchText] = useState('');

  return (
    <View style={styles.container}>
      <Gradient type="header" />
      <SafeAreaView style={styles.searchBarContainer}>
        {searchOn && (
          <TouchableOpacity
            onPress={() => {
              setSearchOn(false);
              setSearchText('');
              Keyboard.dismiss();
            }}
            style={styles.icon}
          >
            <Octicons
              name="chevron-left"
              size={css.iconSizeMax}
              color={css.colors.white}
            />
          </TouchableOpacity>
        )}
        <SearchBar
          searchOn={searchOn}
          setSearchOn={setSearchOn}
          searchText={searchText}
          setSearchText={setSearchText}
        />
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
  },
  icon: {
    width: Platform.OS === 'web' ? '2%' : '10%',
  },
});
