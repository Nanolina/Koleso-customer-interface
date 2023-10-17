import React from 'react';
import { Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { css } from '../../../consts';
import { Gradient } from '../../../ui/Gradient';
import { Button } from '../ui/Button';

export const ModalPhotoUpload = ({
  onClose,
  onCameraSelect,
  onGallerySelect,
}) => {
  return (
    <Modal
      transparent={true}
      animationType="slide"
      visible={true}
      onRequestClose={onClose}
    >
      <View style={styles.container} onStartShouldSetResponder={() => true}>
        <Gradient style={styles.gradient}>
          <Text style={styles.title}>Choose an option</Text>

          <View style={styles.options}>
            <Button onPress={onCameraSelect}>Take Photo</Button>
            <Button onPress={onGallerySelect}>Select from Gallery</Button>
          </View>

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
  options: {
    gap: 20,
    width: '100%',
  },
  title: {
    fontSize: css.size.title,
    fontWeight: 'bold',
    color: css.colors.white,
  },
  closeButtonText: {
    color: css.colors.white,
    textDecorationLine: 'underline',
  },
});
