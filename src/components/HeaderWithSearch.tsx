import React from 'react';
import {
  Dimensions,
  Keyboard,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import {
  removeSearchText,
  turnOffSearch,
} from '../../redux/slices/searchSlice';
import { colors, css } from '../consts';
import { ButtonBack } from '../ui/ButtonBack';
import { SearchBar } from './SearchBar';

const { height } = Dimensions.get('window');
const headerHeight = height / 8;

export const HeaderWithSearch = () => {
  const dispatch = useDispatch();
  const isEnabled = useSelector((state: any) => state.search.isEnabled);

  return (
    <View style={css.header.container}>
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
          <TouchableOpacity>
            <Text style={styles.text}>Search</Text>
          </TouchableOpacity>
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
  text: {
    color: colors.white,
    fontSize: css.size.text18,
  }
});
