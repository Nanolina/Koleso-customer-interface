import { Platform, StyleSheet, TextInput, View } from 'react-native';
import { Icon } from 'react-native-elements';
import { useDispatch, useSelector } from 'react-redux';
import { handleSearchText, turnOnSearch } from '../../redux/slices/searchSlice';
import { css } from '../consts';

const getWidthInput = (isEnabled) => {
  if (isEnabled) {
    return Platform.OS === 'web' ? '90%' : '70%';
  }

  return '100%';
};

export const SearchBar: React.FC = () => {
  const { isEnabled, text } = useSelector((state: any) => state.search);
  const styles = getStyles(isEnabled);
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <Icon name="search" size={css.iconSizeMax} color={css.colors.main} />
      <TextInput
        style={styles.input}
        placeholder="Search..."
        placeholderTextColor={css.colors.gray}
        onFocus={() => dispatch(turnOnSearch())}
        value={text}
        onChangeText={(inputText) => dispatch(handleSearchText(inputText))}
      />
    </View>
  );
};

const getStyles = (isEnabled) =>
  StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      borderWidth: 2,
      borderColor: css.colors.main,
      borderRadius: css.borderRadius,
      paddingLeft: 10,
      backgroundColor: 'white',
      width: getWidthInput(isEnabled),
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
