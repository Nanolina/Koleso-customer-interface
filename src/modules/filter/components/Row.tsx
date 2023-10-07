import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useSelector } from 'react-redux';
import { css } from '../../../consts';
import { getExtraText } from '../functions';

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

  let extraText = selectedItems.length;

  // Wheather
  const {
    temperatureFrom,
    temperatureTo,
    wheatherCondition,
    temperatureFromToggle,
    temperatureToToggle,
  } = useSelector((state: any) => state.filter);

  if (title === 'Wheather') {
    isFilled =
      temperatureFrom !== '0' || temperatureTo !== '0' || wheatherCondition
        ? true
        : false;

    handlePress = () => {
      navigation.navigate('FilterWheatherPage', {
        title,
      });
    };

    extraText = getExtraText(
      temperatureFrom,
      temperatureTo,
      temperatureFromToggle,
      temperatureToToggle,
      wheatherCondition
    );
  }

  return (
    <TouchableOpacity style={styles.container} onPress={handlePress}>
      <Text style={styles.text}>{title}</Text>
      <View style={styles.right}>
        {isFilled ? (
          <Text style={styles.extraFilled}>{extraText}</Text>
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
