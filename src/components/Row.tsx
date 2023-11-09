import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { colors, sizes } from '../consts';
import { getDisplayItem } from '../functions';
import { IRowProps } from '../types';

export const Row: React.FC<IRowProps> = ({
  title,
  navigateTo,
  items = [],
  selectedItems = [],
  selectedItem,
}) => {
  const navigation: any = useNavigation();

  const handlePress = () => {
    navigation.navigate(navigateTo, {
      title,
      items,
      selectedItems,
    });
  };

  // Define what to display in the right part of the component
  const isFilled = selectedItem ? selectedItem : selectedItems.length > 0;
  const extraText = selectedItem
    ? getDisplayItem(title, selectedItem)
    : selectedItems.length;

  return (
    <TouchableOpacity style={styles.container} onPress={handlePress}>
      <Text style={styles.text}>{title}</Text>
      <View style={styles.right}>
        {isFilled ? (
          <Text style={styles.extraFilled}>{extraText}</Text>
        ) : (
          <Text style={styles.extra}>
            {extraText || `Add ${title.toLowerCase()}`}
          </Text>
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
