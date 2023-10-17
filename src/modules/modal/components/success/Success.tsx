import {
  Image,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { css } from '../../../../consts';
import { Gradient } from '../../../../ui/Gradient';
import { images } from '../../consts';
import { StatusSuccessPayment } from './StatusSuccessPayment';

export const Success = ({ onClose }) => {
  return (
    <Modal
      transparent={true}
      animationType="slide"
      visible={true}
      onRequestClose={onClose}
    >
      <View style={styles.container}>
        <Gradient style={styles.gradient}>
          <View style={styles.header}>
            <Text style={styles.text}>Thank you for you purchase!</Text>
            <Image source={images.success} style={styles.image} />
          </View>
          <StatusSuccessPayment />

          <TouchableOpacity onPress={onClose}>
            <Text style={styles.closeButtonText}>Close</Text>
          </TouchableOpacity>
        </Gradient>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.8)',
  },
  gradient: {
    width: '80%',
    padding: 20,
    borderRadius: css.borderRadiusMax,
    alignItems: 'center',
    gap: 30,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 70,
    height: 70,
    position: 'absolute',
    top: -5,
    right: -50,
  },
  text: {
    fontSize: css.size.text16,
    fontWeight: 'bold',
    textAlign: 'center',
    position: 'relative',
  },
  closeButtonText: {
    color: css.colors.white,
    textDecorationLine: 'underline',
  },
});
