import { MaterialIcons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { addPhoto } from '../../../../redux/slices/returnSlice';
import { colors, css, sizes } from '../../../consts';
import { ModalPhotoUpload } from '../../modal';
import { Photo } from '../ui/Photo';

export const PhotoUpload = () => {
  const photos = useSelector((state: any) => state.return.photos);
  const dispatch = useDispatch();
  const [isModalVisible, setModalVisible] = useState(false);

  const takePhoto = async () => {
    // Check and request permission to access the camera
    const { granted } = await ImagePicker.requestCameraPermissionsAsync();
    if (!granted) {
      alert(
        "Access to your camera has been denied. To continue, please enable access in your device's settings"
      );
      return;
    }

    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 0.5,
    });

    if (!result.canceled && result.assets && result.assets.length > 0) {
      dispatch(addPhoto(result.assets[0].uri));
      setModalVisible(false);
    }
  };

  const pickPhoto = async () => {
    if (photos.length >= 5) return;

    // Check and request permission to access the gallery
    const { granted } = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (!granted) {
      alert(
        "Access to your gallery has been denied. To continue, please enable access in your device's settings"
      );
      return;
    }

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 0.5,
    });

    if (!result.canceled && result.assets && result.assets.length > 0) {
      dispatch(addPhoto(result.assets[0].uri));
      setModalVisible(false);
    }
  };

  const openCameraOrGallery = () => {
    setModalVisible(true);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.firstPhotoContainer}
        onPress={openCameraOrGallery}
      >
        {photos.length < 5 ? (
          <MaterialIcons
            name="photo-camera"
            size={sizes.iconSizeMax}
            color={colors.main}
          />
        ) : (
          <Photo index={4} />
        )}
      </TouchableOpacity>

      {isModalVisible && (
        <ModalPhotoUpload
          onClose={() => setModalVisible(false)}
          onCameraSelect={takePhoto}
          onGallerySelect={pickPhoto}
        />
      )}

      {[...new Array(4)].map((_, index) => (
        <View key={index} style={styles.emptyPhotoContainer}>
          {photos[index] && <Photo index={index} />}
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  firstPhotoContainer: {
    backgroundColor: colors.lightGray,
    alignItems: 'center',
    justifyContent: 'center',
    ...css.return.photoContainer,
  },
  emptyPhotoContainer: {
    borderStyle: 'dashed',
    alignItems: 'center',
    justifyContent: 'center',
    ...css.return.photoContainer,
  },
  cameraButton: {
    backgroundColor: colors.lightGray,
    alignItems: 'center',
    justifyContent: 'center',
    ...css.return.photoContainer,
  },
});
