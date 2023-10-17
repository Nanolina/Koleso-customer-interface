import { MaterialIcons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import React from 'react';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { addImage, removeImage } from '../../../../redux/slices/returnSlice';
import { css } from '../../../consts';
import { ButtonRemovePhoto } from '../ui/ButtonRemovePhoto';

export const ImageUpload = () => {
  const images = useSelector((state: any) => state.return.images);
  const dispatch = useDispatch();

  const pickImage = async () => {
    if (images.length >= 5) return;

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 0.5,
    });

    if (!result.canceled && result.assets && result.assets.length > 0) {
      dispatch(addImage(result.assets[0].uri));
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.firstImageContainer} onPress={pickImage}>
        {images.length < 5 ? (
          <MaterialIcons
            name="photo-camera"
            size={28}
            color={css.colors.main}
          />
        ) : (
          <Image source={{ uri: images[4] }} style={css.return.image} />
        )}
      </TouchableOpacity>
      {[...new Array(4)].map((_, index) => (
        <View key={index} style={styles.emptyImageContainer}>
          {images[index] && (
            <View>
              <Image source={{ uri: images[index] }} style={css.return.image} />
              <ButtonRemovePhoto
                onPress={() => {
                  dispatch(removeImage(index));
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
  firstImageContainer: {
    backgroundColor: css.colors.lightGray,
    alignItems: 'center',
    justifyContent: 'center',
    ...css.return.imageContainer,
  },
  emptyImageContainer: {
    borderStyle: 'dashed',
    alignItems: 'center',
    justifyContent: 'center',
    ...css.return.imageContainer,
  },
});
