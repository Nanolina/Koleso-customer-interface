import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {
  Dimensions,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { css } from '../consts';
import { ButtonBack } from '../ui/ButtonBack';
import { GradientHeaderFooter } from '../ui/GradientHeaderFooter';

const { height } = Dimensions.get('window');
const headerHeight = height / 8;

export const HeaderWithFilterSort = ({ title }) => {
  const navigation: any = useNavigation();

  return (
    <View style={styles.container}>
      <GradientHeaderFooter type="header" isBorder={true} />
      <SafeAreaView style={styles.buttonWithText}>
        <ButtonBack navigation={navigation} />
        <Text style={styles.title}>{title}</Text>
        <View style={styles.filterSort}>
          <TouchableOpacity onPress={() => navigation.navigate('SortPage')}>
            <MaterialCommunityIcons
              name="sort"
              size={css.iconSizeMax}
              color={css.colors.white}
            />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('FilterPage')}>
            <MaterialCommunityIcons
              name="filter"
              size={css.iconSizeMax}
              color={css.colors.white}
            />
          </TouchableOpacity>
        </View>
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
  buttonWithText: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: css.size.title,
    fontWeight: 'bold',
    color: css.colors.white,
  },
  filterSort: {
    flexDirection: 'row',
    gap: 10,
  },
});
