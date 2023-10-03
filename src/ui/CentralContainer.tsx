import { StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-virtualized-view';
import { css } from '../consts';

export const CentralContainer = ({ children }) => {
  return <ScrollView style={styles.mainContent}>{children}</ScrollView>;
};

const styles = StyleSheet.create({
  mainContent: {
    flex: 1,
    backgroundColor: css.colors.white,
    paddingHorizontal: 5,
    paddingTop: 5,
  },
});
