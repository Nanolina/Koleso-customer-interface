import { useNavigation } from '@react-navigation/native';
import { useCallback } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { sizes } from '../../../consts';
import { Button } from '../../../ui/Button';

export const SignUpButton: React.FC = () => {
  const navigation: any = useNavigation();

  const handlePress = useCallback(() => {
    navigation.navigate('SignUpPage');
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Don't have an account yet?</Text>
      <Button text="Sign up" onPress={handlePress} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    gap: 10,
  },
  text: {
    fontWeight: 'bold',
    fontSize: sizes.text18,
  },
});
