import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useSelector } from 'react-redux';
import { css } from '../../../consts';

export const Row = ({ items = [], title, selectedItems = [] }: any) => {
  const navigation: any = useNavigation();

  let isFilled = selectedItems.length > 0;

  let handlePress = () => {
    navigation.navigate('FilterCheckboxPage', {
      title,
      items,
      selectedItems,
    });
  };

  // Wheather
  const { temperatureFrom, temperatureTo, wheatherCondition } = useSelector(
    (state: any) => state.filter
  );

  if (title === 'Wheather') {
    isFilled =
      temperatureFrom !== null || temperatureTo !== null || wheatherCondition
        ? true
        : false;

    handlePress = () => {
      navigation.navigate('FilterWheatherPage', {
        title,
      });
    };
  }

  return (
    <TouchableOpacity style={styles.container} onPress={handlePress}>
      <Text style={styles.text}>{title}</Text>
      <View style={styles.right}>
        {isFilled ? (
          <Text style={styles.extraFilled}>{selectedItems.length}</Text>
        ) : (
          <Text style={styles.extra}>Add {title.toLowerCase()}</Text>
        )}
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
