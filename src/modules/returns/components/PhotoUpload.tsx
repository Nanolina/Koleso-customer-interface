import { MaterialIcons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import React from 'react';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { addPhoto, removePhoto } from '../../../../redux/slices/returnSlice';
import { css } from '../../../consts';
import { ButtonRemovePhoto } from '../ui/ButtonRemovePhoto';

export const PhotoUpload = () => {
  const photos = useSelector((state: any) => state.return.photos);
  const dispatch = useDispatch();

  const pickPhoto = async () => {
    if (photos.length >= 5) return;

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 0.5,
    });

    if (!result.canceled && result.assets && result.assets.length > 0) {
      dispatch(addPhoto(result.assets[0].uri));
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.firstPhotoContainer} onPress={pickPhoto}>
        {photos.length < 5 ? (
          <MaterialIcons
            name="photo-camera"
            size={28}
            color={css.colors.main}
          />
        ) : (
          <Image source={{ uri: photos[4] }} style={css.return.photo} />
        )}
      </TouchableOpacity>
      {[...new Array(4)].map((_, index) => (
        <View key={index} style={styles.emptyPhotoContainer}>
          {photos[index] && (
            <View>
              <Image source={{ uri: photos[index] }} style={css.return.photo} />
              <ButtonRemovePhoto
                onPress={() => {
                  dispatch(removePhoto(index));
                }}
              />
            </View>
          )}
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
    backgroundColor: css.colors.lightGray,
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
});
