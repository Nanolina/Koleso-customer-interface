import React from 'react';
import { useTranslation } from 'react-i18next';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { colors, css, sizes } from '../consts';
import { INoteProps } from '../types';

export const Note: React.FC<INoteProps> = React.memo(
  ({ title, placeholder, value, onChangeText }) => {
    const { t } = useTranslation('translation', {
      keyPrefix: 'orderProcessing',
    });

    return (
      <View style={styles.container}>
        {title && <Text style={styles.text}>{t('note')}</Text>}
        <TextInput
          style={styles.textArea}
          multiline={true}
          numberOfLines={4}
          placeholder={placeholder}
          value={value}
          onChangeText={onChangeText}
        />
      </View>
    );
  }
);

const styles = StyleSheet.create({
  container: {
    gap: 10,
  },
  textArea: {
    height: 100,
    padding: 10,
    borderRadius: css.borderRadiusMin,
    backgroundColor: colors.lightGray,
  },
  text: {
    fontSize: sizes.text16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
