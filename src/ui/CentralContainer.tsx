import { Platform, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-virtualized-view';
import { css } from '../consts';

export const CentralContainer = ({ isPadding, children }) => {
  const styles = getStyles(isPadding);
  return <ScrollView style={styles.mainContent}>{children}</ScrollView>;
};

const getStyles = (isPadding) =>
  StyleSheet.create({
    mainContent: {
      flex: 1,
      backgroundColor: css.colors.white,
      width: '100%',
      ...(isPadding && {
        paddingVertical: Platform.OS === 'web' ? css.paddingWeb : css.padding,
        paddingHorizontal: Platform.OS === 'web' ? css.paddingWeb : css.padding,
      }),
    },
  });
