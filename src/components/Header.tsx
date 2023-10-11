import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { css } from '../consts';
import { ButtonBack } from '../ui/ButtonBack';
import { GradientHeaderFooter } from '../ui/GradientHeaderFooter';

export const Header = ({ title }) => {
  const navigation: any = useNavigation();

  return (
    <View style={css.header.container}>
      <GradientHeaderFooter type="header" isBorder={true} />
      <SafeAreaView style={styles.buttonWithText}>
        <ButtonBack navigation={navigation} />
        <Text style={styles.title}>{title}</Text>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonWithText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontWeight: 'bold',
    ...css.header.title,
  },
});
