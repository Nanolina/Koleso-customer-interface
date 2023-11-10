import { MaterialCommunityIcons } from '@expo/vector-icons';
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from '@react-navigation/native';
import React, { useCallback } from 'react';
import {
  Keyboard,
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { useDispatch } from 'react-redux';
import { removeSearchText } from '../../redux/slices/searchSlice';
import { colors, sizes } from '../consts';
import { IHeaderProps } from '../types';
import { ButtonBack } from '../ui/ButtonBack';
import { SearchBar } from './SearchBar';

export const Header: React.FC<IHeaderProps> = React.memo(
  ({
    title,
    hasButtonBack = false,
    showFilterSort = false,
    showSearchBar = false,
    isEnabledSearch,
    setIsEnabledSearch,
  }) => {
    const navigation: NavigationProp<ParamListBase> = useNavigation();
    const dispatch = useDispatch();

    const handlePressBack = useCallback(() => {
      setIsEnabledSearch(false);
      dispatch(removeSearchText());
      Keyboard.dismiss();
    }, [dispatch, setIsEnabledSearch]);

    // Styles for the header, depending on the presence of a back button
    const headerStyles = [
      styles.header,
      !hasButtonBack && styles.headerWithCenteredTitle,
    ];

    return (
      <View style={styles.container}>
        <SafeAreaView>
          <View style={headerStyles}>
            {/* Back button if it should be visible */}
            {hasButtonBack && <ButtonBack navigation={navigation} />}

            {/* If search is enabled, display the back button for search */}
            {isEnabledSearch && <ButtonBack onPress={handlePressBack} />}

            {/* If SearchBar is not displayed, show the title */}
            {!showSearchBar && (
              <Text numberOfLines={1} ellipsizeMode="tail" style={styles.title}>
                {title}
              </Text>
            )}

            {/* Container for SearchBar and "Search" button if search is enabled */}
            {showSearchBar && (
              <View style={styles.searchContainer}>
                <SearchBar
                  isEnabledSearch={isEnabledSearch}
                  setIsEnabledSearch={setIsEnabledSearch}
                />

                {isEnabledSearch && (
                  <TouchableOpacity>
                    <Text style={styles.searchButtonText}>Search</Text>
                  </TouchableOpacity>
                )}
              </View>
            )}

            {/* Container for sorting and filtering icons if they should be visible */}
            {showFilterSort && (
              <View style={styles.filterSort}>
                <TouchableOpacity
                  onPress={() => navigation.navigate('SortPage')}
                >
                  <MaterialCommunityIcons
                    name="sort"
                    size={sizes.iconSizeMiddle}
                    color={colors.white}
                  />
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() => navigation.navigate('FilterPage')}
                >
                  <MaterialCommunityIcons
                    name="filter"
                    size={sizes.iconSizeMiddle}
                    color={colors.white}
                  />
                </TouchableOpacity>
              </View>
            )}
          </View>
        </SafeAreaView>
      </View>
    );
  }
);

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    paddingBottom: 5,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 20,
    backgroundColor: colors.main,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerWithCenteredTitle: {
    justifyContent: 'flex-end',
  },
  title: {
    fontWeight: 'bold',
    flexShrink: 1,
    fontSize: sizes.text18,
    color: colors.white,
  },
  filterSort: {
    flexDirection: 'row',
    gap: 10,
  },
  searchButtonText: {
    color: colors.white,
    fontSize: sizes.text18,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    flex: 1,
  },
});
