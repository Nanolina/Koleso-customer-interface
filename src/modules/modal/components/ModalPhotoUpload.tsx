import React from 'react';
import { useTranslation } from 'react-i18next';
import { StyleSheet, Text, View } from 'react-native';
import { colors, sizes } from '../../../consts';
import { Button } from '../../../ui/Button';
import { IModalPhotoProps } from '../types';
import { CustomModal } from './CustomModal';

export const ModalPhotoUpload: React.FC<IModalPhotoProps> = React.memo(
  ({ onClose, onCameraSelect, onGallerySelect }) => {
    const { t } = useTranslation('translation', { keyPrefix: 'modal.photo' });

    return (
      <CustomModal onClose={onClose}>
        <Text style={styles.title}>{t('chooseOption')}</Text>

        <View style={styles.options}>
          <Button
            text={t('takePhoto')}
            onPress={onCameraSelect}
            backgroundColor={colors.grayOpacity}
            textColor={colors.main}
            hasShadow
          />
          <Button
            text={t('selectFromGallery')}
            onPress={onGallerySelect}
            backgroundColor={colors.grayOpacity}
            textColor={colors.main}
            hasShadow
          />
        </View>
      </CustomModal>
    );
  }
);

const styles = StyleSheet.create({
  options: {
    gap: 20,
    width: '100%',
  },
  title: {
    fontSize: sizes.title,
    fontWeight: 'bold',
    color: colors.black,
  },
});
