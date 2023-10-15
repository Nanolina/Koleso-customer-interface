import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { css } from '../consts';
import { ButtonBack } from '../ui/ButtonBack';
import { GradientHeaderFooter } from '../ui/GradientHeaderFooter';

export const Header = ({ title, hasButton = true }) => {
  const navigation: any = useNavigation();

  const styles = getStyles(hasButton);

  return (
    <View style={css.header.container}>
      <GradientHeaderFooter type="header" isBorder={true} />
      <SafeAreaView style={styles.buttonWithText}>
        {hasButton && <ButtonBack navigation={navigation} />}
        <Text style={styles.title}>{title}</Text>
      </SafeAreaView>
    </View>
  );
};

const getStyles = (hasButton) =>
  StyleSheet.create({
    buttonWithText: {
      flexDirection: 'row',
      justifyContent: hasButton ? 'space-between' : 'center',
    },
    title: {
      fontWeight: 'bold',
      ...css.header.title,
    },
  });
