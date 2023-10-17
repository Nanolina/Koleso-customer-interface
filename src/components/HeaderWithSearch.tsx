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
import { css } from '../consts';
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
    <View style={css.header.container}>
      <GradientHeaderFooter type="header" isBorder={true} />
      <SafeAreaView style={styles.searchBarContainer}>
        {isEnabled && (
          <ButtonBack
            onPress={() => {
              dispatch(turnOffSearch());
              dispatch(removeSearchText());
              Keyboard.dismiss();
            }}
            width={20}
          />
        )}

        <SearchBar />

        {isEnabled && (
          <ButtonGradient text="Search" onPress={() => {}} width={80} />
        )}
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  searchBarContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    justifyContent: 'center',
  },
});
