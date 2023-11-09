import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { colors, css, sizes } from '../consts';
import { ButtonBack } from '../ui/ButtonBack';

export const HeaderWithFilterSort = React.memo(({ title }: any) => {
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
              size={sizes.iconSizeMax}
              color={colors.white}
            />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('FilterPage')}>
            <MaterialCommunityIcons
              name="filter"
              size={sizes.iconSizeMax}
              color={colors.white}
            />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </View>
  );
});

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
