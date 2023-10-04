import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Dimensions, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { css } from '../consts';
import { ButtonBack } from '../ui/ButtonBack';
import { GradientHeaderFooter } from '../ui/GradientHeaderFooter';

const { width, height } = Dimensions.get('window');
const headerHeight = height / 8;

export const Header = ({ title }) => {
  const navigation: any = useNavigation();

  return (
    <View style={styles.container}>
      <GradientHeaderFooter type="header" />
      <SafeAreaView style={styles.buttonWithText}>
        <ButtonBack
          onPress={() => {
            navigation.goBack();
          }}
        />
        <Text style={styles.title}>{title}</Text>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width,
    height: headerHeight,
    justifyContent: 'space-around',
    paddingLeft: 15,
    paddingRight: 15,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    position: 'relative',
  },
  buttonWithText: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: css.size.title,
    fontWeight: 'bold',
    color: css.colors.white,
  },
});
