import React, { useMemo } from 'react';
import { KeyboardAvoidingView, Platform, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-virtualized-view';
import { colors, css } from '../consts';
import { ICentralContainerProps } from '../types';

export const CentralContainer: React.FC<ICentralContainerProps> = React.memo(
  ({ isPadding, isMinPadding = false, children }) => {
    const styles = useMemo(
      () => getStyles(isPadding, isMinPadding),
      [isPadding, isMinPadding]
    );

    return (
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{ flex: 1 }}
      >
        <ScrollView style={styles.mainContent}>{children}</ScrollView>
      </KeyboardAvoidingView>
    );
  }
);

const getStyles = (isPadding: boolean, isMinPadding: boolean) =>
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
