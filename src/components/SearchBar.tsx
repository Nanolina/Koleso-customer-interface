import { Platform, StyleSheet, TextInput, View } from 'react-native';
import { Icon } from 'react-native-elements';
import { css } from '../consts';

const getWidthInput = (searchOn) => {
  if (searchOn) {
    return Platform.OS === 'web' ? '97%' : '90%';
  }

  return '100%';
};

export const SearchBar: React.FC<{
  searchOn: boolean;
  setSearchOn: any;
  searchText: string;
  setSearchText: any;
}> = ({ searchOn = false, setSearchOn, searchText = '', setSearchText }) => {
  const styles = getStyles(searchOn);

  return (
    <View style={styles.container}>
      <Icon name="search" size={css.iconSizeMax} color={css.colors.border} />
      <TextInput
        style={styles.input}
        placeholder="Search..."
        placeholderTextColor={css.colors.gray}
        onFocus={() => setSearchOn(true)}
        value={searchText}
        onChangeText={setSearchText}
      />
    </View>
  );
};

const getStyles = (searchOn) =>
  StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      borderWidth: 2,
      borderColor: css.colors.border,
      borderRadius: css.borderRadius,
      paddingLeft: 10,
      backgroundColor: 'white',
      width: getWidthInput(searchOn),
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
