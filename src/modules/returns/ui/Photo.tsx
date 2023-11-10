import React, { useCallback } from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../../redux/rootReducer';
import { removePhoto } from '../../../../redux/slices/returnSlice';
import { IPhotoProps } from '../types';
import { ButtonRemovePhoto } from './ButtonRemovePhoto';

export const Photo: React.FC<IPhotoProps> = React.memo(({ index }) => {
  const photos = useSelector((state: RootState) => state.return.photos);
  const dispatch = useDispatch();

  const handleRemovePhoto = useCallback(() => {
    dispatch(removePhoto(index));
  }, [dispatch, index]);

  return (
    <View>
      <Image source={{ uri: photos[index] }} style={styles.photo} />
      <ButtonRemovePhoto onPress={handleRemovePhoto} />
    </View>
  );
});

const styles = StyleSheet.create({
  photo: {
    width: 70,
    height: 100,
    borderRadius: 8,
  },
});
