import React from 'react';
import {
  Dimensions,
  Keyboard,
  SafeAreaView,
  StyleSheet,
  View,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import {
  removeSearchText,
  turnOffSearch,
} from '../../redux/slices/searchSlice';
import { ButtonBack } from '../ui/ButtonBack';
import { ButtonGradient } from '../ui/ButtonGradient';
import { GradientHeaderFooter } from '../ui/GradientHeaderFooter';
import { SearchBar } from './SearchBar';

const { height } = Dimensions.get('window');
const headerHeight = height / 8;

export const HeaderWithSearch = () => {
  const dispatch = useDispatch();
  const isEnabled = useSelector((state: any) => state.search.isEnabled);

  return (
    <View style={styles.container}>
      <GradientHeaderFooter type="header" isBorder={true} />
      <SafeAreaView style={styles.searchBarContainer}>
        {isEnabled && (
          <ButtonBack
            onPress={() => {
              dispatch(turnOffSearch());
              dispatch(removeSearchText());
              Keyboard.dismiss();
            }}
          />
        )}

        <SearchBar />

        {isEnabled && (
          <ButtonGradient
            text="Search"
            onPress={() => console.log('Search')}
            width={80}
          />
        )}
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
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
