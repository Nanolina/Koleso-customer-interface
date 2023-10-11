import { SafeAreaView, StyleSheet, View } from 'react-native';
import { css } from '../consts';

export const SafeAreaViewContainer = ({ isPadding, children }) => {
  const styles = getStyles(isPadding);
  return (
    <SafeAreaView style={styles.mainContent}>
      <View style={styles.container}>{children}</View>
    </SafeAreaView>
  );
};

const getStyles = (isPadding) =>
  StyleSheet.create({
    mainContent: {
      flex: 1,
      backgroundColor: css.colors.white,
      width: '100%',
    },
    container: {
      ...(isPadding && css.modal),
    },
  });
