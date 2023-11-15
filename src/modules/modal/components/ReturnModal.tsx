import { useTranslation } from 'react-i18next';
import { Image, StyleSheet, Text, View } from 'react-native';
import { sizes } from '../../../consts';
import { images } from '../consts';
import { IModalProps } from '../types';
import { CustomModal } from './CustomModal';

export const ReturnModal: React.FC<IModalProps> = ({ onClose }) => {
  const { t } = useTranslation();

  return (
    <CustomModal onClose={onClose}>
      <View style={styles.container}>
        <Text style={styles.title}>{t('modal.return.success.title')}</Text>
        <View style={styles.textWithImage}>
          <Image source={images.error} style={styles.image} />
          <Text style={styles.text}>{t('modal.return.success.notFit')}</Text>
        </View>
        <Text style={styles.text}>
          {t('modal.return.success.notification')}
        </Text>
        <Text style={styles.title}>
          {t('modal.return.success.lookForward')}!
        </Text>
      </View>
    </CustomModal>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20,
  },
  image: {
    width: 50,
    height: 50,
  },
  title: {
    fontSize: sizes.text16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  text: {
    fontSize: sizes.text16,
    textAlign: 'center',
  },
  textWithImage: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '60%',
    gap: 10,
  },
});
