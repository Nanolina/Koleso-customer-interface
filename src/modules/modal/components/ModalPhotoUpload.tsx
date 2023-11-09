import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { colors, sizes } from '../../../consts';
import { Button } from '../../../ui/Button';
import { CustomModal } from './CustomModal';

interface IModalPhotoProps {
  onClose: () => void;
  onCameraSelect: () => void;
  onGallerySelect: () => void;
}

export const ModalPhotoUpload: React.FC<IModalPhotoProps> = React.memo(
  ({ onClose, onCameraSelect, onGallerySelect }) => {
    return (
      <CustomModal onClose={onClose}>
        <Text style={styles.title}>Choose an option</Text>

        <View style={styles.options}>
          <Button
            text="Take Photo"
            onPress={onCameraSelect}
            backgroundColor={colors.grayOpacity}
          />
          <Button
            text="Select from Gallery"
            onPress={onGallerySelect}
            backgroundColor={colors.grayOpacity}
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
    color: colors.white,
  },
});
