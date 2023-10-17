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
import { TextError } from '../../ui/TextError';
import { StatusErrorPayment } from './StatusErrorPayment';

export const Error = ({ onClose }) => {
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
            <TextError />
            <Image source={images.error} style={styles.image} />
          </View>
          <StatusErrorPayment />

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
    width: 30,
    height: 30,
    position: 'absolute',
    top: 10,
    right: -40,
  },
  closeButtonText: {
    color: css.colors.white,
    textDecorationLine: 'underline',
  },
});
