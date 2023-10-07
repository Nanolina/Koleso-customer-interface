import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useSelector } from 'react-redux';
import { css } from '../../../consts';

export const Filter = () => {
  const navigation: any = useNavigation();
  const colors = useSelector((state: any) => state.filter.colors);

  const isFilled = colors.length > 0;

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() =>
        navigation.navigate('FilterCheckboxPage', { title: 'Colors' })
      }
    >
      <Text style={styles.text}>Colors</Text>
      <View style={styles.right}>
        {!isFilled && <Text style={styles.extra}>Add color</Text>}
        {isFilled && <Text style={styles.extraFilled}>{colors.length}</Text>}
        <AntDesign
          name="right"
          size={css.iconSizeMin}
          color={css.colors.gray}
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: css.padding,
    paddingVertical: css.padding,
  },
  text: {
    fontSize: css.size.text20,
    fontWeight: 'bold',
    width: '50%',
  },
  right: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  extra: {
    color: css.colors.gray,
    fontSize: css.size.text20,
  },
  extraFilled: {
    color: css.colors.black,
    fontSize: css.size.text20,
  },
});
