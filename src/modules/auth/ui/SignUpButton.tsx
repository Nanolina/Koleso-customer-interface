import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, View } from 'react-native';
import { css } from '../../../consts';
import { Button } from '../../../ui/Button';

export const SignUpButton = () => {
  const navigation: any = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Don't have an account yet?</Text>
      <Button
        text="Sign up"
        onPress={() => navigation.navigate('SignUpPage')}
      />
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
    fontSize: css.size.text18,
  },
});
