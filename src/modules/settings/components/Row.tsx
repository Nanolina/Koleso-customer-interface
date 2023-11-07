import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { colors, sizes } from '../../../consts';
import { getDisplayItem } from '../functions';

export const Row = ({
  type = 'checkbox',
  items = [],
  title,
  selectedItem = null,
}: any) => {
  const navigation: any = useNavigation();

  const redirectPages = {
    checkbox: 'SettingsCheckboxPage',
    input: 'SettingsInputPage',
    birthday: 'SettingsBirthdayPage',
    password: 'SettingsPasswordPage',
  };

  const handlePress = () => {
    if (redirectPages[type]) {
      navigation.navigate(redirectPages[type], {
        title,
        items,
      });
    }
  };

  const displayItem = getDisplayItem(title, selectedItem);

  return (
    <TouchableOpacity style={styles.container} onPress={handlePress}>
      <Text style={styles.text}>{title}</Text>
      <View style={styles.right}>
        {displayItem ? (
          <Text style={styles.extraFilled}>{displayItem}</Text>
        ) : (
          <Text style={styles.extra}>
            {type === 'password' ? 'Change' : 'Add'} {title.toLowerCase()}
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
