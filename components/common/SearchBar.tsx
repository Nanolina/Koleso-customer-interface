import { StyleSheet, TextInput, View } from 'react-native';
import { Icon } from 'react-native-elements';
import { borderRadius, colors, iconSize } from '../../assets/css';

export const SearchBar: React.FC = () => (
  <View style={styles.searchBar}>
    <Icon name="search" size={iconSize} color={colors.border} />
    <TextInput
      style={styles.input}
      placeholder="Search..."
      placeholderTextColor={colors.gray}
    />
  </View>
);

const styles = StyleSheet.create({
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: colors.border,
    borderRadius: borderRadius,
    paddingLeft: 10,
    backgroundColor: 'white',
    width: '100%',
  },
  input: {
    height: 40,
    flex: 1,
    paddingLeft: 10,
  },
});
