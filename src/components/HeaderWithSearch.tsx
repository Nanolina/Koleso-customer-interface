import React from 'react';
import {
  Keyboard,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { useDispatch } from 'react-redux';
import { removeSearchText } from '../../redux/slices/searchSlice';
import { colors, css, sizes } from '../consts';
import { ButtonBack } from '../ui/ButtonBack';
import { SearchBar } from './SearchBar';

export const HeaderWithSearch = ({ isEnabledSearch, setIsEnabledSearch }) => {
  const dispatch = useDispatch();

  return (
    <View style={css.header.container}>
      <SafeAreaView style={styles.searchBarContainer}>
        {isEnabledSearch && (
          <ButtonBack
            onPress={() => {
              setIsEnabledSearch(false);
              dispatch(removeSearchText());
              Keyboard.dismiss();
            }}
            width={20}
          />
        )}

        <SearchBar
          isEnabledSearch={isEnabledSearch}
          setIsEnabledSearch={setIsEnabledSearch}
        />

        {isEnabledSearch && (
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
    fontSize: sizes.text18,
  },
});
