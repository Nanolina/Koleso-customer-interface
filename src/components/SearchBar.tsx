import { StyleSheet, TextInput, View } from 'react-native';
import { Icon } from 'react-native-elements';
import { css } from '../consts';

export const SearchBar: React.FC = () => (
  <View style={styles.container}>
    <Icon name="search" size={css.iconSize} color={css.colors.border} />
    <TextInput
      style={styles.input}
      placeholder="Search..."
      placeholderTextColor={css.colors.gray}
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: css.colors.border,
    borderRadius: css.borderRadius,
    paddingLeft: 10,
    backgroundColor: 'white',
  },
  input: {
    height: 40,
    flex: 1,
    paddingLeft: 10,
  },
});
