import { useNavigation } from '@react-navigation/native';
import { StyleSheet, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { courier, pickupPoint } from '../../../../consts';
import { toggleReturnWay } from '../../../../redux/slices/returnSlice';
import { ButtonWithBorder } from '../../../ui/ButtonWithBorder';

export const ButtonsBottom = ({ item }) => {
  const dispatch = useDispatch();
  const navigation: any = useNavigation();

  return (
    <View style={styles.container}>
      <ButtonWithBorder
        text={pickupPoint}
        onPress={() => {
          dispatch(toggleReturnWay(pickupPoint));
          navigation.navigate('ReturnWayPage', {
            item,
          });
        }}
      />
      <ButtonWithBorder
        text={courier}
        onPress={() => {
          dispatch(toggleReturnWay(courier));
          navigation.navigate('ReturnWayPage', {
            item,
          });
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
