import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { css } from '../../../consts';
import { Button } from '../ui/Button';
import { CustomModal } from './CustomModal';

export const ModalPhotoUpload = ({
  onClose,
  onCameraSelect,
  onGallerySelect,
}) => {
  return (
    <CustomModal onClose={onClose}>
      <Text style={styles.title}>Choose an option</Text>

      <View style={styles.options}>
        <Button onPress={onCameraSelect}>Take Photo</Button>
        <Button onPress={onGallerySelect}>Select from Gallery</Button>
      </View>
    </CustomModal>
  );
};

const styles = StyleSheet.create({
  options: {
    gap: 20,
    width: '100%',
  },
  title: {
    fontSize: css.size.title,
    fontWeight: 'bold',
    color: css.colors.white,
  },
});
