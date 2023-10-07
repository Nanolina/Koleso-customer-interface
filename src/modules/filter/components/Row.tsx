import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { css } from '../../../consts';

export const Row = ({ items, title, selectedItems }) => {
  const navigation: any = useNavigation();

  const isFilled = items.length > 0;

  const handlePress = () => {
    navigation.navigate('FilterCheckboxPage', {
      title,
      items,
      selectedItems,
    });
  };

  return (
    <TouchableOpacity style={styles.container} onPress={handlePress}>
      <Text style={styles.text}>{title}</Text>
      <View style={styles.right}>
        {!isFilled && (
          <Text style={styles.extra}>Add {title.toLowerCase()}</Text>
        )}
        {isFilled && (
          <Text style={styles.extraFilled}>{selectedItems.length}</Text>
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
