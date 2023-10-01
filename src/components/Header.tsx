import React from 'react';
import {
  Dimensions,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { colors } from '../consts';
import { Gradient } from '../ui/Gradient';
import { SearchBar } from './SearchBar';

const { width, height } = Dimensions.get('window');
let headerHeight = height / 7;

if (Platform.OS === 'ios') {
  headerHeight = height / 6;
}

export const Header: React.FC = () => {
  return (
    <View style={styles.container}>
      <Gradient type="header" />
      <SafeAreaView style={styles.textAndSearchBarContainer}>
        <Text style={styles.text}>Main</Text>
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
    paddingBottom: 15,
    paddingLeft: 15,
    paddingRight: 15,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    position: 'relative',
  },
  textAndSearchBarContainer: {
    gap: 5,
    alignItems: 'center',
    width: '100%',
  },
  text: {
    fontSize: 24,
    fontFamily: 'OpenSans_700Bold',
    color: colors.white,
    paddingTop: 10,
  },
});
