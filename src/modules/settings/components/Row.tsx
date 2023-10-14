import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { css } from '../../../consts';

export const Row = ({
  type = 'checkbox',
  items = [],
  title,
  selectedItem = null,
}: any) => {
  const navigation: any = useNavigation();

  let handlePress = () => {
    navigation.navigate('SettingsCheckboxPage', {
      title,
      items,
    });
  };

  if (type === 'input') {
    handlePress = () => {
      navigation.navigate('SettingsInputPage', {
        title,
      });
    };
  }

  return (
    <TouchableOpacity style={styles.container} onPress={handlePress}>
      <Text style={styles.text}>{title}</Text>
      <View style={styles.right}>
        {selectedItem ? (
          <Text style={styles.extraFilled}>{selectedItem}</Text>
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
