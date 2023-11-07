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
import { colors, css } from '../consts';
import { ButtonBack } from '../ui/ButtonBack';

const { height } = Dimensions.get('window');
const headerHeight = height / 8;

export const HeaderWithFilterSort = ({ title }) => {
  const navigation: any = useNavigation();

  return (
    <View style={css.header.container}>
      <SafeAreaView style={styles.buttonWithText}>
        <ButtonBack navigation={navigation} />
        <Text style={styles.title}>{title}</Text>
        <View style={styles.filterSort}>
          <TouchableOpacity onPress={() => navigation.navigate('SortPage')}>
            <MaterialCommunityIcons
              name="sort"
              size={css.iconSizeMax}
              color={colors.white}
            />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('FilterPage')}>
            <MaterialCommunityIcons
              name="filter"
              size={css.iconSizeMax}
              color={colors.white}
            />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonWithText: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontWeight: 'bold',
    ...css.header.title,
  },
  filterSort: {
    flexDirection: 'row',
    gap: 10,
  },
});
