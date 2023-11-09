import { Image, StyleSheet, Text, View } from 'react-native';
import { colors, sizes } from '../../../../consts';
import { images } from '../../consts';
import { IModalProps } from '../../types';
import { CustomModal } from '../CustomModal';
import { StatusSuccessPayment } from './StatusSuccessPayment';

export const SuccessModal: React.FC<IModalProps> = ({ onClose }) => {
  return (
    <CustomModal onClose={onClose}>
      <View style={styles.container}>
        <Text style={styles.text}>Thank you for you purchase!</Text>
        <Image source={images.success} style={styles.image} />
      </View>
      <StatusSuccessPayment />
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
    width: 70,
    height: 70,
    position: 'absolute',
    top: -5,
    right: -50,
  },
  text: {
    fontSize: sizes.text16,
    fontWeight: 'bold',
    textAlign: 'center',
    position: 'relative',
    color: colors.yellow,
  },
});
