import { AntDesign, EvilIcons } from '@expo/vector-icons';
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from '@react-navigation/native';
import React, { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useSelector } from 'react-redux';
import { colors, sizes } from '../../../consts';
import { IRootState } from '../../../redux/rootReducer';
import { getDisplayItem } from '../functions';
import { IRowProps } from '../types';

export const Row: React.FC<IRowProps> = React.memo(
  ({
    title,
    displayTitle,
    navigateTo,
    items = [],
    selectedItems = [],
    selectedItem,
  }) => {
    const navigation: NavigationProp<ParamListBase> = useNavigation();
    const { t } = useTranslation();

    const { isVerifiedEmail } = useSelector((state: IRootState) => state.user);

    const handlePress = useCallback(() => {
      navigation.navigate(navigateTo, {
        title,
        items,
        selectedItems,
      });
    }, [navigation, navigateTo, title, items, selectedItems]);

    // Define what to display in the right part of the component
    const isFilled = selectedItem ? selectedItem : selectedItems.length;
    const extraText = selectedItem
      ? getDisplayItem(title, selectedItem)
      : selectedItems.length;

    return (
      <TouchableOpacity style={styles.container} onPress={handlePress}>
        <Text style={styles.text}>{displayTitle}</Text>
        <View style={styles.right}>
          {isFilled ? (
            <>
              <Text style={styles.extraFilled}>{extraText}</Text>
              {title === 'Email' && !isVerifiedEmail && (
                <EvilIcons
                  name="exclamation"
                  size={sizes.iconSizeMin}
                  color={colors.red}
                />
              )}
            </>
          ) : (
            <Text style={styles.extra}>
              {title === 'Password' ? t('change') : t('add')}
            </Text>
          )}
          <AntDesign name="right" size={sizes.iconSize16} color={colors.gray} />
        </View>
      </TouchableOpacity>
    );
  }
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  text: {
    fontSize: sizes.text16,
    fontWeight: 'bold',
  },
  right: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  extra: {
    color: colors.gray,
    fontSize: sizes.text16,
  },
  extraFilled: {
    color: colors.black,
    fontSize: sizes.text16,
  },
});
