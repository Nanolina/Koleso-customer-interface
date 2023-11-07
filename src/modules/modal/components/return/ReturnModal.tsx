import { Image, StyleSheet, Text, View } from 'react-native';
import { css } from '../../../../consts';
import { images } from '../../consts';
import { CustomModal } from '../CustomModal';

export const ReturnModal = ({ onClose }) => {
  return (
    <CustomModal onClose={onClose}>
      <View style={styles.container}>
        <Text style={styles.title}>
          The refund request has been created successfully
        </Text>
        <View style={styles.textWithImage}>
          <Image source={images.error} style={styles.image} />
          <Text style={styles.text}>
            We are sorry that the product does not fit you.
          </Text>
        </View>
        <Text style={styles.text}>
          You will receive a notification about the consideration of your
          request in your personal cabinet in the nearest future.
        </Text>
        <Text style={styles.title}>We look forward to seeing you again!</Text>
      </View>
    </CustomModal>
  );
};

const styles = StyleSheet.create({
  container: {
    // flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20,
  },
  image: {
    width: 60,
    height: 60,
  },
  title: {
    fontSize: css.size.text16,
    fontWeight: 'bold',
    textAlign: 'center',
    color: css.colors.yellow,
  },
  text: {
    fontSize: css.size.text16,
    textAlign: 'center',
    color: css.colors.white,
  },
  textWithImage: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '60%',
    gap: 20,
  },
});
