import { Image, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { removePhoto } from '../../../../redux/slices/returnSlice';
import { css } from '../../../consts';
import { ButtonRemovePhoto } from './ButtonRemovePhoto';

export const Photo = ({ index }) => {
  const photos = useSelector((state: any) => state.return.photos);
  const dispatch = useDispatch();

  return (
    <View>
      <Image source={{ uri: photos[index] }} style={css.return.photo} />
      <ButtonRemovePhoto
        onPress={() => {
          dispatch(removePhoto(index));
        }}
      />
    </View>
  );
};
