import { useNavigation } from '@react-navigation/native';
import { Platform, StyleSheet, TextInput, View } from 'react-native';
import { Icon } from 'react-native-elements';
import { css } from '../consts';

const getWidthInput = (isBack) => {
  if (isBack) {
    return Platform.OS === 'web' ? '97%' : '90%';
  }

  return '100%';
};

export const SearchBar = ({ isBack = false }) => {
  const navigation: any = useNavigation();
  const styles = getStyles(isBack);

  return (
    <View style={styles.container}>
      <Icon name="search" size={css.iconSizeMax} color={css.colors.border} />
      <TextInput
        style={styles.input}
        placeholder="Search..."
        placeholderTextColor={css.colors.gray}
        onFocus={() => navigation.navigate('Search')}
      />
    </View>
  );
};

const getStyles = (isBack) =>
  StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      borderWidth: 2,
      borderColor: css.colors.border,
      borderRadius: css.borderRadius,
      paddingLeft: 10,
      backgroundColor: 'white',
      width: getWidthInput(isBack),
    },
    input: {
      height: 40,
      flex: 1,
      paddingLeft: 10,
      outlineStyle: 'none',
    },
  });
