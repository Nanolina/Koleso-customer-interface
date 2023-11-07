import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { colors, sizes } from '../../../consts';

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

  return (
    <TouchableOpacity style={styles.container} onPress={handlePress}>
      <Text style={styles.text}>{title}</Text>
      <View style={styles.right}>
        {isFilled ? (
          <Text style={styles.extraFilled}>{extraText}</Text>
        ) : (
          <Text style={styles.extra}>Add {title.toLowerCase()}</Text>
        )}
        <AntDesign name="right" size={sizes.iconSizeMin} color={colors.gray} />
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
    fontSize: sizes.text20,
    fontWeight: 'bold',
  },
  right: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  extra: {
    color: colors.gray,
    fontSize: sizes.text20,
  },
  extraFilled: {
    color: colors.black,
    fontSize: sizes.text20,
  },
});
