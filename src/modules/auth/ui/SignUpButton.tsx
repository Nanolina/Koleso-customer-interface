import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, View } from 'react-native';
import { css } from '../../../consts';
import { ButtonGradient } from '../../../ui/ButtonGradient';

export const SignUpButton = () => {
  const navigation: any = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Don't have an account yet?</Text>
      <ButtonGradient
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
