import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from '@react-navigation/native';
import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { StyleSheet, Text, View } from 'react-native';
import { sizes } from '../../../consts';
import { Button } from '../../../ui/Button';

export const SignUpButton: React.FC = () => {
  const { t } = useTranslation();

  const navigation: NavigationProp<ParamListBase> = useNavigation();

  const handlePress = useCallback(() => {
    navigation.navigate('SignUpPage');
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{t('auth.notAccount')}</Text>
      <Button text={t('auth.signUp')} onPress={handlePress} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    gap: 10,
  },
  text: {
    fontSize: sizes.text18,
  },
});
