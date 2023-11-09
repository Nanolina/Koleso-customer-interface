import { Image, StyleSheet, View } from 'react-native';
import { images } from '../../consts';
import { IModalProps } from '../../types';
import { TextError } from '../../ui/TextError';
import { CustomModal } from '../CustomModal';
import { StatusErrorPayment } from './StatusErrorPayment';

export const ErrorModal: React.FC<IModalProps> = ({ onClose }) => {
  return (
    <CustomModal onClose={onClose}>
      <View style={styles.container}>
        <TextError />
        <Image source={images.error} style={styles.image} />
      </View>
      <StatusErrorPayment />
    </CustomModal>
  );
};

const styles = StyleSheet.create({
  container: {
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
});
