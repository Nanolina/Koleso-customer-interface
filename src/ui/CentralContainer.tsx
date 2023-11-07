import { KeyboardAvoidingView, Platform, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-virtualized-view';
import { colors, css } from '../consts';

export const CentralContainer = ({
  isPadding,
  isMinPadding = false,
  children,
}: any) => {
  const styles = getStyles(isPadding, isMinPadding);
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{ flex: 1 }}
    >
      <ScrollView style={styles.mainContent}>{children}</ScrollView>
    </KeyboardAvoidingView>
  );
};

const getStyles = (isPadding, isMinPadding) =>
  StyleSheet.create({
    mainContent: {
      flex: 1,
      backgroundColor: colors.white,
      width: '100%',
      ...(isPadding && {
        paddingVertical:
          Platform.OS === 'web' || !isMinPadding ? css.paddingMax : css.padding,
        paddingHorizontal:
          Platform.OS === 'web' || !isMinPadding ? css.paddingMax : css.padding,
      }),
    },
  });
