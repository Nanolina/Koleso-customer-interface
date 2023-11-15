import React, { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { Platform, StyleSheet, TextInput, View } from 'react-native';
import { Icon } from 'react-native-elements';
import { useDispatch, useSelector } from 'react-redux';
import { handleSearchText } from '../../redux/slices/searchSlice';
import { colors, css, sizes } from '../consts';
import { ISearchBarProps, ISearchState } from '../types';

const getWidthInput = (isEnabled) => {
  if (isEnabled) {
    return Platform.OS === 'web' ? '90%' : '70%';
  }

  return '100%';
};

export const SearchBar: React.FC<ISearchBarProps> = React.memo(
  ({ isEnabledSearch, setIsEnabledSearch }) => {
    const { t } = useTranslation();

    const dispatch = useDispatch();
    const text = useSelector((state: ISearchState) => state.search.text);
    const width = useMemo(
      () => getWidthInput(isEnabledSearch),
      [isEnabledSearch]
    );

    return (
      <View style={[styles.container, { width }]}>
        <Icon name="search" size={sizes.iconSizeMax} color={colors.main} />
        <TextInput
          style={styles.input}
          placeholder={`${t('search')}...`}
          placeholderTextColor={colors.gray}
          onFocus={() => setIsEnabledSearch(true)}
          value={text}
          onChangeText={(inputText) => dispatch(handleSearchText(inputText))}
        />
      </View>
    );
  }
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: colors.main,
    borderRadius: css.borderRadiusMax,
    paddingLeft: 10,
    backgroundColor: 'white',
  },
  input: {
    height: 40,
    flex: 1,
    paddingLeft: 10,
    ...(Platform.OS === 'web' && {
      outlineStyle: 'none',
    }),
  },
});
