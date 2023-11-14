import React from 'react';
import { useTranslation } from 'react-i18next';
import { Image, StyleSheet, Text } from 'react-native';
import { sizes } from '../../../consts';
import { images } from '../consts';
import { IStatusModalProps } from '../types';
import { CustomModal } from './CustomModal';

export const StatusModal: React.FC<IStatusModalProps> = React.memo(
  ({
    onClose,
    type,
    title,
    message,
    orderId,
    widthImage,
    heightImage,
    topImage,
    rightImage,
  }) => {
    const { t } = useTranslation('translation', {
      keyPrefix: 'modal',
    });

    const isSuccess = type === 'success';
    const imageSource = isSuccess ? images.success : images.error;
    const additionalText = isSuccess
      ? `${t('success.orderNumber')}: ${orderId}`
      : t('error.tryAgain');

    return (
      <CustomModal onClose={onClose}>
        <Text style={styles.title}>{title}</Text>
        <Image
          source={imageSource}
          style={[
            styles.image,
            {
              width: widthImage,
              height: heightImage,
              top: topImage,
              right: rightImage,
            },
          ]}
        />
        <Text style={styles.message}>{message}</Text>
        <Text style={styles.additionalText}>{additionalText}</Text>
      </CustomModal>
    );
  }
);

const styles = StyleSheet.create({
  title: {
    fontSize: sizes.title,
    fontWeight: 'bold',
    textAlign: 'center',
    position: 'relative',
  },
  image: {
    width: 60,
    height: 60,
    position: 'absolute',
    top: 30,
    right: 10,
  },
  message: {
    fontSize: sizes.text16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  additionalText: {
    fontSize: sizes.text15,
    textAlign: 'left',
  },
});
