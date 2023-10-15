import { Platform, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-virtualized-view';
import { css } from '../consts';

export const CentralContainer = ({
  isPadding,
  isMinPadding = false,
  children,
}: any) => {
  const styles = getStyles(isPadding, isMinPadding);
  return <ScrollView style={styles.mainContent}>{children}</ScrollView>;
};

const getStyles = (isPadding, isMinPadding) =>
  StyleSheet.create({
    mainContent: {
      flex: 1,
      backgroundColor: css.colors.white,
      width: '100%',
      ...(isPadding && {
        paddingVertical:
          Platform.OS === 'web' || !isMinPadding ? css.paddingMax : css.padding,
        paddingHorizontal:
          Platform.OS === 'web' || !isMinPadding ? css.paddingMax : css.padding,
      }),
    },
  });
