import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { css } from '../../../consts';
import { Gradient } from '../../../ui/Gradient';

export const Button = ({ type, text }) => {
  const isCart = type === 'cart';
  const styles = getStyles(isCart);

  const Content = () => <Text style={styles.text}>{text}</Text>;

  return (
    <TouchableOpacity style={styles.container}>
      {isCart ? (
        <Gradient style={styles.gradient}>
          <Content />
        </Gradient>
      ) : (
        <Content />
      )}
    </TouchableOpacity>
  );
};

const baseStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: css.borderRadiusMax,
  },
  gradient: {
    borderRadius: css.borderRadiusMax,
    paddingVertical: 10,
    paddingHorizontal: 40,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontWeight: 'bold',
    color: 'black',
  },
});

const getStyles = (isCart) => {
  return {
    ...baseStyles,
    container: {
      ...baseStyles.container,
      backgroundColor: isCart ? 'transparent' : 'rgba(7, 214, 15, 0.55)',
    },
  };
};
