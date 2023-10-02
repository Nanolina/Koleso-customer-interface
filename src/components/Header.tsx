import { Octicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {
  Dimensions,
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

export const Header = ({ isBack = false }) => {
  const navigation: any = useNavigation();

  return (
    <View style={styles.container}>
      <Gradient type="header" />
      <SafeAreaView style={styles.searchBarContainer}>
        {isBack && (
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={styles.icon}
          >
            <Octicons
              name="chevron-left"
              size={css.iconSizeMax}
              color={css.colors.white}
            />
          </TouchableOpacity>
        )}
        <SearchBar isBack={isBack} />
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
    paddingTop: 30,
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    width: Platform.OS === 'web' ? '2%' : '10%',
  },
});
